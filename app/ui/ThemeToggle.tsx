"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      title={`Toggle ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      aria-label={`Toggle ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-foreground/60 hover:bg-foreground/5 hover:text-foreground focus-visible:outline-foreground flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
    >
      <Moon className="hidden dark:block" size={18} />
      <Sun className="block dark:hidden" size={18} />
    </button>
  );
}
