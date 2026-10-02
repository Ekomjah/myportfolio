import Link from "next/link";
import { ArrowLeft, FaceSlightlyFrowning } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/404.webp')] bg-cover bg-center bg-no-repeat opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
      />

      <div className="flex max-w-[36rem] flex-col items-center gap-3 px-6 text-center">
        <FaceSlightlyFrowning size={60} className="text-white/70" />
        <h1 className="m-0 text-[44px] leading-none tracking-tight text-white sm:text-[64px]">
          Page not found
        </h1>
        <p className="m-0 max-w-[30rem] text-[15px] leading-relaxed text-white/70">
          That page doesn&apos;t exist, or it has moved somewhere I haven&apos;t
          found yet.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
