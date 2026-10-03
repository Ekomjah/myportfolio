import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t-foreground/10 text-muted flex w-full flex-col items-center justify-center gap-4 border-t py-6 text-sm">
      <p className="m-0">
        © {new Date().getFullYear()} Ekomjah Denis. All rights reserved.
      </p>
      <div className="max-w-page flex w-full flex-wrap items-center justify-between">
        <p className="m-0">
          Built with Next.js and TypeScript. Deployed on Vercel. Text is set in
          Geist or Rock Salt typefaces.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="https://github.com/ekomjah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black no-underline hover:underline dark:text-white"
          >
            GitHub
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/ekomjah"
            className="text-black no-underline hover:underline dark:text-white"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
