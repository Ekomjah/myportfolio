"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "ekomjahedet@gmail.com";

export function useCopyEmail() {
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

  return { copied, copyEmail };
}

export function CopyEmailIcon({ copied }: { copied: boolean }) {
  return copied ? <Check size={16} /> : <Copy size={16} />;
}

export default function CopyEmail() {
  const { copied, copyEmail } = useCopyEmail();

  return (
    <button
      type="button"
      onClick={copyEmail}
      title="Copy email to clipboard"
      className="border-foreground/15 bg-foreground/3 text-foreground/70 hover:border-foreground/30 hover:text-foreground focus-visible:outline-foreground flex h-[36px] items-center gap-[8px] rounded border px-[12px] text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
    >
      <CopyEmailIcon copied={copied} />
      <span className="text-[13px] leading-none font-medium">
        {copied ? "Copied" : "Copy email"}
      </span>
    </button>
  );
}