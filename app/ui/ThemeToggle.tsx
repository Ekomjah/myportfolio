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
      className="flex size-9 shrink-0 items-center justify-center rounded-full text-foreground/60 transition-colors duration-200 motion-reduce:transition-none hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <Sun className="hidden dark:block" size={18} />
      <Moon className="block dark:hidden" size={18} />
    </button>
  );
}
