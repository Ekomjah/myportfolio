"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return {
    label: resolvedTheme === "dark" ? "Light mode" : "Dark mode",
    toggleTheme: () =>
      setTheme(resolvedTheme === "dark" ? "light" : "dark"),
  };
}

// Swapped with CSS rather than the resolved theme so the first client render
// matches the server markup instead of tripping a hydration mismatch.
export function ThemeToggleIcon() {
  return (
    <>
      <Moon className="block size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </>
  );
}

export function ThemeToggle() {
  const { label, toggleTheme } = useThemeToggle();

  return (
    <button
      type="button"
      title={`Toggle ${label.toLowerCase()}`}
      aria-label={`Toggle ${label.toLowerCase()}`}
      onClick={toggleTheme}
      className="text-foreground/60 hover:bg-foreground/5 hover:text-foreground focus-visible:outline-foreground flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
    >
      <ThemeToggleIcon />
    </button>
  );
}