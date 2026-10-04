import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex w-full flex-1 flex-col">
      <div className="bg-white relative h-[34dvh] min-h-[200px] w-full overflow-hidden">
        <Image
          src="/404.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
        <p className="m-0 max-w-[34rem] text-2xl leading-snug font-medium sm:text-3xl">
          This is not the web page you are looking for.
        </p>
        <p className="text-muted m-0 max-w-[34rem] text-base leading-relaxed">
          The page may have been moved or renamed. Try searching for it, or head
          back to the homepage.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-foreground text-background hover:bg-foreground/85 focus-visible:outline-foreground inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 active:translate-y-px motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Back to home
          </Link>
          <Link
            href="/projects"
            className="border-foreground/20 bg-foreground/[0.03] text-foreground hover:border-foreground/40 hover:bg-foreground/[0.06] focus-visible:outline-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 active:translate-y-px motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Search size={16} className="shrink-0" />
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  );
}