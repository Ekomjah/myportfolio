import Link from "next/link";
import { ArrowUpRight, Navigation, FolderBookmark, Mail } from "lucide-react";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";
import LinkedIn from "./icons/LinkedIn";

export default function Description() {
  return (
    <section
      id="description"
      className="border-foreground/10 mt-10 w-full border-b pb-10"
    >
      <div className="max-w-[54ch] space-y-3 text-[17px] leading-relaxed sm:text-[18px]">
        <p className="m-0">
          Hi, I&apos;m Ekomjah Denis, a full-stack software engineer. I build
          and ship full-stack applications — from the first pixel to deployed
          and scaled.
        </p>
        <p className="text-muted-foreground m-0">
          Day to day that means page-load performance, design systems, state
          architecture, and authentication.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="text-muted-foreground text-base">Find me on:</span>

        <Link
          href="mailto:ekomjahedet@gmail.com"
          className="text-foreground inline-flex items-center gap-1.5 no-underline transition-opacity hover:opacity-70"
        >
          <Mail size={16} strokeWidth={2.5} />
          <span>Email</span>
        </Link>

        <Link
          href="https://x.com/ekz_dee"
          className="text-foreground inline-flex items-center gap-1.5 no-underline transition-opacity hover:opacity-70"
        >
          <SiX size={14} />
          <span>@ekz_dee</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/ekomjah"
          className="text-foreground inline-flex items-center gap-1.5 no-underline transition-opacity hover:opacity-70"
        >
          <LinkedIn className="size-4" />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/ekomjah"
          className="text-foreground inline-flex items-center gap-1.5 no-underline transition-opacity hover:opacity-70"
        >
          <SiGithub size={16} />
          <span>GitHub</span>
        </Link>
      </div>
      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Link
          href="/projects"
          className="bg-foreground text-background hover:bg-foreground/85 focus-visible:outline-foreground inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px motion-reduce:transition-none"
        >
          <FolderBookmark size={18} className="shrink-0" />
          <span>See my best work</span>
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group border-foreground/20 bg-foreground/[0.03] text-foreground hover:border-foreground/40 hover:bg-foreground/[0.06] focus-visible:outline-foreground inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px motion-reduce:transition-none"
        >
          <Navigation size={18} className="shrink-0" />
          <span>View my Resumé</span>
          <ArrowUpRight
            size={15}
            className="shrink-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </section>
  );
}
