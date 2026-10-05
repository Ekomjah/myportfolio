import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Captura | Ekomjah Denis",
  description:
    "Captura turns a raw screenshot upload into a searchable, multi-format cloud asset — storing the original, generating optimized variants, and indexing text via OCR.",
};

const workflow = [
  {
    term: "In-memory transcoding",
    body: "Pillow converts each upload straight into WebP and JPEG variants in memory. Nothing touches the disk on the way through, so there is no temp directory to clean up and no path-traversal surface to reason about.",
  },
  {
    term: "OCR on upload",
    body: "PyTesseract reads the image the moment it lands, so the screenshot becomes findable immediately rather than after a background pass. You upload an error log, close the tab, and search for it later.",
  },
  {
    term: "Private by default",
    body: "The bucket has no public access. Every download is a presigned S3 URL that expires after fifteen minutes, so a leaked link stops working on its own.",
  },
  {
    term: "Indexed for search",
    body: "ocr_text carries a GIN index in PostgreSQL, and /v1/search queries straight against it. Full-text search over the inside of an image, without a separate search service.",
  },
];

const architecture = [
  { label: "API", items: ["FastAPI", "Pydantic"] },
  { label: "Image processing", items: ["Pillow"] },
  { label: "OCR", items: ["PyTesseract"] },
  { label: "Storage", items: ["AWS S3"] },
  { label: "Database", items: ["PostgreSQL"] },
];

const impact = [
  "Upload an image and have it safely stored, with the original kept as the source of truth.",
  "Get an auto-generated WebP variant to cut bandwidth on every subsequent view.",
  "Search for text inside images to find a specific screenshot among hundreds.",
  "Download optimized JPEG or WebP variants per use case, without re-uploading.",
];

export default function CapturaPage() {
  return (
    <div className="max-w-page mx-auto w-full px-4 py-8 md:px-8 md:py-12">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground focus-visible:outline-foreground group inline-flex items-center gap-1.5 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
      >
        <ArrowLeft className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none" />
        All projects
      </Link>

      <div className="mt-8 flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:pb-12">
        <div className="space-y-2.5 text-balance">
          <h1
            className={`${lusitana.className} m-0 text-[32px] leading-tight font-medium tracking-tight lg:text-[40px]`}
          >
            Captura
          </h1>
          <p className="text-muted-foreground m-0 text-base/7 lg:text-lg/7">
            Screenshots are dead data — generic filenames, no searchability, no
            structure. Captura turns a raw image upload into a searchable,
            multi-format cloud asset.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://captura-captures.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Captura live demo (opens in a new tab)"
            className="border-border bg-background hover:bg-muted focus-visible:outline-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:outline-none"
          >
            View project
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="https://github.com/ekomjah/captura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Captura source on GitHub (opens in a new tab)"
            className="border-border bg-background hover:bg-muted focus-visible:outline-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:outline-none"
          >
            Source
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="/projects/captura/Captura.png"
          alt="Captura's landing page, showing the search-focused hero and the three feature cards beneath it."
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="text-muted-foreground mt-16 space-y-6 *:max-w-[65ch] [&_a]:underline [&_a]:underline-offset-2">
        <div className="inline-flex items-center gap-2 font-medium">
          <span>April - June 2026</span>
          <span aria-hidden="true">·</span>
          <span>Asset management</span>
        </div>

        <p className="m-0">
          Built for QA engineers and developers who need to reference an error
          log or a UI state quickly, without keeping screenshots in a folder
          named <span className="font-medium">Screenshot 2024-11-03.png</span>.
          Drop in an image and Captura stores the original, generates optimized
          variants, extracts its text, and serves the lot over signed URLs.
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/projects/captura/dashboard.png"
            alt="Captura's landing page, showing the search-focused hero and the three feature cards beneath it."
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/projects/captura/settings.png"
            alt="Captura's landing page, showing the search-focused hero and the three feature cards beneath it."
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Workflow decisions:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {workflow.map(({ term, body }) => (
              <li key={term}>
                <span className="font-medium">{term}</span> — {body}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/projects/captura/asset.png"
            alt="Captura's landing page, showing the search-focused hero and the three feature cards beneath it."
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Architecture choices:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {architecture.map(({ label, items }) => (
              <li key={label}>
                <span className="font-medium">{label}:</span> {items.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Impact:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="m-0">
          One honest caveat: transcoding and OCR are currently synchronous, so a
          large upload holds the request open for the length of both. Moving
          that CPU-bound work to a background worker is the next step, not a
          finished feature.
        </p>
      </div>

      <div className="mt-16">
        <Link
          href="/projects"
          className="group focus-visible:outline-foreground inline-flex w-fit items-center gap-1 transition-opacity duration-200 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
        >
          <span className="text-lg font-medium">Other Projects</span>
          <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </div>
    </div>
  );
}
