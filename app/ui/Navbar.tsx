"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const EMAIL = "ekomjahedet@gmail.com";

const SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "resume", label: "Resumé" },
  { id: "blog", label: "Blog" },
];

export default function NavBar() {
  const [copied, setCopied] = useState(false);
  const resetCopied = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copyEmail() {
    try {
      if (!navigator.clipboard) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      if (resetCopied.current) clearTimeout(resetCopied.current);
      resetCopied.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error(`Copy failed — email me at ${EMAIL}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex justify-between p-4 md:p-2 w-[80vw] max-w-page max-[580px]:w-full items-center gap-[12px] px-[16px]">
        <div className="flex items-center gap-4">
          <a
            href="#home"
            aria-label="Ekomjah Denis, back to top"
            className="shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            <Image
              src="/images/me.png"
              alt=""
              width={80}
              height={80}
              className="size-[40px] rounded-full object-cover ring-1 ring-foreground/20 max-[420px]:size-[36px]"
            />
          </a>

          <nav
            aria-label="Primary"
            className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex items-center gap-[2px] justify-end min-[601px]:justify-center min-[601px]:gap-1">
              {SECTIONS.map(({ id, label }) => (
                <li key={id} className="shrink-0">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/${id}`}
                    className="flex items-center gap-[6px] rounded-full px-[12px] py-[8px] text-[15px] font-medium text-foreground/55 transition-colors duration-200 motion-reduce:transition-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="flex h-[36px] items-center gap-[8px] rounded border border-foreground/15 bg-foreground/[0.03] px-[12px] text-[13px] font-medium text-foreground/70 transition-colors duration-200 motion-reduce:transition-none hover:border-foreground/30 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span className="max-[520px]:sr-only">
              {copied ? "Copied" : "Copy email"}
            </span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
