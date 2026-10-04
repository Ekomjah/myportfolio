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
    <header className="border-foreground/10 bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="max-w-page mx-auto flex w-[80vw] items-center justify-between gap-[12px] p-4 px-[16px] max-[580px]:w-full md:p-2">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Ekomjah Denis, back to top"
            className="focus-visible:outline-foreground shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Image
              src="/images/me.png"
              alt=""
              width={80}
              height={80}
              className="ring-foreground/20 size-[40px] rounded-full object-cover ring-1 max-[420px]:size-[36px]"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex items-center justify-end gap-[2px] min-[601px]:justify-center min-[601px]:gap-1">
              {SECTIONS.map(({ id, label }) => (
                <li key={id} className="shrink-0">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/${id}`}
                    className="text-foreground/55 hover:text-foreground focus-visible:outline-foreground flex items-center gap-[6px] rounded-full px-[12px] py-[8px] text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
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
            className="border-foreground/15 bg-foreground/[0.03] text-foreground/70 hover:border-foreground/30 hover:text-foreground focus-visible:outline-foreground flex h-[36px] items-center gap-[8px] rounded border px-[12px] text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
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
