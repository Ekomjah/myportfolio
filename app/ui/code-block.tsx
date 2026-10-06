"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative my-7 [&>pre]:my-0!">
      <pre ref={preRef}>{children}</pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="bg-background text-muted-foreground hover:text-foreground focus-visible:ring-foreground/40 absolute top-2.5 right-2.5 rounded-md border p-1.5 transition-opacity duration-200 focus-visible:ring-2 focus-visible:outline-none sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        <span className="sr-only" aria-live="polite">
          {copied ? "Copied to clipboard" : ""}
        </span>
      </button>
    </div>
  );
}
