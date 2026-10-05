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
      <DropdownMenuContent align="end" className="w-auto min-w-[15rem] p-2">
        <DropdownMenuItem
          onClick={() => window.open("/blog")}
          className="gap-3 px-3 py-2.5 text-base"
        >
          <Notebook className="size-5" />
          Blog
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open("/resume.pdf")}
          className="gap-3 px-3 py-2.5 text-base"
        >
          <FileUser className="size-5" />
          View Resumé
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={toggleTheme}
          className="gap-3 px-3 py-2.5 text-base"
        >
          <ThemeToggleIcon />
          Switch Theme
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={copyEmail}
          className="gap-3 px-3 py-2.5 text-base"
        >
          <CopyEmailIcon copied={copied} />
          {copied ? "Copied" : "Copy email"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
