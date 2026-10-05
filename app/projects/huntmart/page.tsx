import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { lusitana } from "@/app/ui/fonts";
import { RelatedProjects } from "@/app/ui/related-projects";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const metadata: Metadata = {
  title: "Hunt Mart",
  description:
    "Hunt Mart is a full e-commerce front end built with React and Vite — Algolia search with shareable URL state, a Zustand cart, Firebase auth and data, and Algolia InstantSearch tuned to stop the page freezing on every keystroke.",
  alternates: { canonical: "/projects/huntmart" },
};

const shots = [
  {
    src: "/projects/huntmart/shop.png",
    alt: "Hunt Mart's storefront: a hero carousel above category tiles for Electronics, Home Decor, Fashion and Groceries, with cart, message and notification counts in the app bar.",
  },
  {
    src: "/projects/huntmart/product-search.png",
    alt: "Search results for the query 'laptops', returning seven products — including a backpack whose description contains the word 'laptops' and matches out of the box.",
  },
  {
    src: "/projects/huntmart/product-desc.png",
    alt: "A product detail page for a Generic Motorcycle, showing the discounted price, star rating, image gallery, stock count and a details tab.",
  },
];

const workflow = [
  {
    term: "Search state lives in the URL",
    body: "Query, page and refinements route as /shop/search?q=laptop&page=2&category=beauty, so a result set is a shareable link and the back button behaves. Writes go through React Router's navigate, which keeps it the single owner of history.",
  },
  {
    term: "Widgets mount unconditionally",
    body: "Mounting an InstantSearch widget calls addWidgets, which schedules another search. Rendering <Hits> only on the success path meant every resolved search fired a fresh one — about eight requests a second, forever. Now every widget registers up front and status only decides what is painted.",
  },
  {
    term: "query is never set on Configure",
    body: "The query prop is reserved; InstantSearch owns it and routes it. Passing it anyway fought the router and duplicated work. Search goes through useSearchBox().refine() instead.",
  },
  {
    term: "Cart lives in one store",
    body: "Zustand holds cart state globally, so any component reads and mutates it without prop drilling — add, decrement and remove all update the badge count immediately.",
  },
];

const architecture = [
  { label: "Framework", items: ["React 19", "Vite", "React Router"] },
  { label: "Search", items: ["Algolia", "React InstantSearch"] },
  { label: "State & data", items: ["Zustand", "React Query", "Axios"] },
  { label: "Backend & auth", items: ["Firebase"] },
  { label: "Styling", items: ["Tailwind CSS", "Material UI", "Emotion"] },
  { label: "Quality", items: ["Vitest", "Testing Library", "ESLint", "Husky"] },
];

const impact = [
  "Typo-tolerant search finds a product from a word buried in its description.",
  "Results are shareable by copying the URL, and the back button works as expected.",
  "Cart totals, badge counts and quantity controls stay in sync across the app.",
  "A regression test asserts one request per query, so the freeze cannot silently return.",
];

export default function HuntMartPage() {
  return (
    <div className="max-w-page mx-auto w-full px-4 py-8 md:px-8 md:py-12">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground focus-visible:outline-foreground group inline-flex items-center gap-1.5 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
      >
        <ArrowLeft className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none" />
        All projects
      </Link>

      <div className="mt-8 flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:pb-12">
        <div className="space-y-2.5 text-balance">
          <h1
            className={`${lusitana.className} m-0 text-[32px] leading-tight font-medium tracking-tight lg:text-[40px]`}
          >
            Hunt Mart
          </h1>
          <p className="text-muted-foreground m-0 text-base/7 lg:text-lg/7">
            A storefront where the hard part was never the cart — it was making
            search fast, shareable, and impossible to hang.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://huntmart.netlify.app/shop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Hunt Mart live demo (opens in a new tab)"
            className="border-border bg-background hover:bg-muted focus-visible:outline-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:outline-none"
          >
            <Globe /> View project
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://github.com/ekomjah/huntmart"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Hunt Mart source on GitHub (opens in a new tab)"
            className="border-border bg-background hover:bg-muted focus-visible:outline-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:outline-none"
          >
            <SiGithub /> Source
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={shots[0].src}
          alt={shots[0].alt}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="text-muted-foreground mt-16 space-y-6 *:max-w-[65ch] [&_a]:underline [&_a]:underline-offset-2">
        <div className="inline-flex items-center gap-2 font-medium">
          <span>2026</span>
          <span aria-hidden="true">·</span>
          <span>E-commerce</span>
        </div>

        <p className="m-0">
          Hunt Mart is a feature-rich storefront built on React and Vite, with
          Firebase for auth and product data and Algolia for search. Browse by
          category, search with typo tolerance, review ratings, scan a barcode,
          and check out — with cart state that stays consistent wherever you
          add or remove things.
        </p>

        <p className="m-0">
          What makes it worth writing up is a performance bug that took real
          digging. The search page froze under typing, and the cause was a
          feedback loop rather than anything to do with Algolia being slow.
        </p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={shots[1].src}
            alt={shots[1].alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Workflow decisions:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {workflow.map(({ term, body }) => (
              <li key={term}>
                <span className="font-medium">{term}</span> — {body}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={shots[2].src}
            alt={shots[2].alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Architecture choices:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {architecture.map(({ label, items }) => (
              <li key={label}>
                <span className="font-medium">{label}:</span> {items.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Impact:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="m-0">
          One security note worth repeating: nothing in a{" "}
          <span className="font-medium">VITE_</span> variable is secret. Those
          values are inlined into the client bundle by definition, so the Algolia
          admin key is read by a seeding script and never by the app — data
          protection comes from Firebase Security Rules, not from withholding
          config.
        </p>
      </div>

      <RelatedProjects current="Hunt Mart" />
    </div>
  );
}