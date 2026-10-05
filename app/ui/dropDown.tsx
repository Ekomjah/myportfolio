"use client";

import { Ellipsis, FileUser, Notebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyEmailIcon, useCopyEmail } from "./copyEmail";
import { ThemeToggleIcon, useThemeToggle } from "./ThemeToggle";

export function DropdownMenuIcons() {
  const { copied, copyEmail } = useCopyEmail();
  const { toggleTheme } = useThemeToggle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Ellipsis />
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-auto min-w-[13rem] p-1.5">
        <DropdownMenuItem onClick={() => window.open("/blog")}>
          <Notebook />
          Blog
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open("/resume.pdf")}>
          <FileUser />
          View Resumé
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggleTheme}>
          <ThemeToggleIcon />
          Switch Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyEmail}>
          <CopyEmailIcon copied={copied} />
          {copied ? "Copied" : "Copy email"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
