---
title: "Context into the useContext React Hook"
description: "In this note, we shall look into how the rarely used useContext hook can be utilized properly into our codebase, with some neat tricks along the way to save us 12 hours of prop drilling and give us universal control over state management"
date: "2026-10-05"
tags: ["tooling", "javascript", "react"]
draft: false
cover: /blog/useContext.jpg
---

Every React codebase I have ever worked in has the same slow disease. It starts
harmless: a component needs some data, so its parent passes it down. That parent
needs it too, so it asks *its* parent. Three levels later, the component that
actually uses the value is four props away from the component that owns it, and
somebody in the middle is passing props it does not care about.

Nobody calls this a problem, because it compiles. It passes review. It ships.
Then a new requirement arrives, the prop needs to be renamed, and you open the
file and find eleven levels of drilling.

This note is about the escape hatch React gives you for exactly this, and the
parts of it that are genuinely non-obvious.

---

## The shape of the problem

Consider a cart. The data lives in one place. Three components deep, a button
needs it.

```jsx
function App() {
  const cart = useCart(); // owns the state

  return <Layout cart={cart} />;
}

function Layout({ cart }) {
  // `cart` is passed along purely so a grandchild can use it
  return <Sidebar cart={cart} />;
}

function Sidebar({ cart }) {
  return <CartButton cart={cart} />;
}

function CartButton({ cart }) {
  return <button>{cart.length} items</button>;
}
```

`Layout` and `Sidebar` do not use `cart`. They are couriers. And this is the
part that should bother you more than the verbosity: **couriers are a coupling**.
The moment `Sidebar` needs its own state, it needs its own props, and the
signature of `Sidebar` now says something about `App`'s internals. Every
intermediate component has been made aware of a tree it does not own.

---

## What context actually is

Context is a way to put a value on the tree and let any descendant read it
directly, skipping every level in between.

```jsx
import { createContext, useContext } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // The value is recomputed on every render, but only the
  // consumers below are notified when it changes.
  const value = useMemo(
    () => ({ items, add: (item) => setItems((s) => [...s, item]) }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
```

And the consumer becomes trivial:

```jsx
function CartButton() {
  const { items } = useContext(CartContext);
  return <button>{items.length} items</button>;
}
```

`Layout` and `Sidebar` no longer appear in this story at all. That is the entire
point — not fewer characters, **fewer components that have to know**.

---

## The mistakes that make people avoid the hook

The hook is described as "rarely used", and I think the reason is that most
tutorials teach the API without teaching the failure modes. Here are the four I
see repeatedly.

### 1. Building a new object on every render

This is the big one, and it does not just waste cycles — it makes context feel
slow enough that people conclude context is slow.

```jsx
// Do not do this.
<CartContext.Provider value={{ items, add }}>
```

That object is new on every single render, so every consumer re-renders on every
render of the provider, no matter what. If you have a list of a thousand rows
reading context, you will notice, and you will blame context.

Memoize it, as above. Or memoize inside the hook that owns the state:

```jsx
function useCart() {
  const [items, setItems] = useState([]);

  return useMemo(
    () => ({ items, add: (item) => setItems((s) => [...s, item]) }),
    [items],
  );
}
```

Now the provider passes a stable reference and consumers only wake up when
`items` genuinely changes.

### 2. Forgetting the default value

`createContext(null)` means a component used outside the provider reads `null`,
and the crash surfaces three files away from the mistake:

```jsx
// Inside CartButton, outside any CartProvider:
const { items } = useContext(CartContext);
items.length; // TypeError: Cannot read properties of null
```

Give it a real default, and the failure becomes a type error at the point of
misuse:

```jsx
const CartContext = createContext({
  items: [],
  add: () => {
    throw new Error("useCart must be used inside a CartProvider");
  },
});
```

The throwing default is the important trick. It turns a silent `null`
dereference into a message that names the actual problem.

### 3. Putting everything in one context

Context is not free. Every consumer of a context re-renders when its value
changes — that is the contract. So if you put your entire app state in one
object, changing a toast timer re-renders the navbar.

Split by update frequency, not by feature:

```jsx
<AuthContext.Provider value={auth}>       {/* changes rarely */}
  <CartContext.Provider value={cart}>     {/* changes on click */}
    <ToastContext.Provider value={toast}> {/* changes every second */}
      {children}
```

Now a ticking toast cannot re-render your cart, because they are separate
contexts with separate subscriptions.

### 4. Reaching for context as an optimisation

Context has a real cost: an extra subscription, a re-render on identity change.
For genuinely hot values — a pointer position, an animation frame, a value that
changes 60 times a second — props are cheaper and more explicit, because you can
pass exactly what is needed to exactly the component that needs it.

Use context when the value is genuinely tree-wide. Use props when it is one
branch.

---

## Custom hooks: the part worth copying

Writing `useContext(CartContext)` in twenty components means the provider shape
is coupled to twenty call sites. A custom hook hides it behind one name, and
gives you a place to put the awkward bits.

```jsx
import { createContext, useContext } from "react";

const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);

  if (ctx === null) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return ctx;
}

export function CartProvider({ children, initialItems = [] }) {
  // ...provider implementation
}
```

Now the failure mode is a clear stack trace:

```
Error: useCart must be used within a CartProvider
    at useCart (app/context/CartContext.js:14:9)
    at CartButton (app/components/CartButton.js:8:20)
```

Compare that to `Cannot read properties of null (reading 'length')`. One tells
you what to fix, the other tells you where you crashed.

The `initialItems` prop is worth noting too: letting the provider accept its
initial state means tests and stories can mount a provider with known data,
instead of rendering through the entire default flow just to get to the state
they want.

---

## Composition: the part that is genuinely elegant

The strongest argument for context is not prop reduction — it is that it
removes a *layer*. Compare a provider that wraps and a provider that injects.

```jsx
// Wrapping: the provider knows about your layout.
<AuthProvider>
  <AppShell />
</AuthProvider>

// Injecting: the provider decides where its consumer goes.
function ThemeProvider({ children }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

function App() {
  return (
    <ThemeProvider>
      <Page />
      <ThemeToggle /> {/* injected here, not at the root */}
    </ThemeProvider>
  );
}
```

With a wrapper you are choosing the *structure* of the tree, and you have to get
it right at the top. With injection you are choosing *where a capability becomes
available*, and you colocate the consumer next to the thing that needs it.

The `ThemeProvider` in this very site is exactly this pattern. It wraps nothing
structural. It only makes `useTheme()` work, and the toggle sits wherever the
design wanted it.

---

## When to reach for it

| Situation | Reach for |
| --- | --- |
| Value used by one branch of the tree | Props |
| Value needed across unrelated branches | Context |
| Value changes many times per second | Props or a ref-based store |
| Library-level state (theme, i18n, auth) | Context |
| Frequent, independent updates (cart, toast) | Separate contexts per concern |

Context is not the answer to state management. It is the answer to one specific
question: *how does a value reach a component that is far away without every
component in between having to know it exists?*

---

## Closing

The hook is not rare because it is advanced. It is rare because it is easy to
use badly, and the bad version is fast enough to seem fine until it isn't.

Three habits cover almost all of it: memoize the value, give it a default that
fails loudly, and split contexts by update frequency. Write the custom hook so
the provider's shape appears in exactly one file.

That is roughly the twelve hours of drilling you do not have to spend.