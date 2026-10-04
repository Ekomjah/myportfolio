import SocialLinks from "./icons/socials";
export default function Footer() {
  return (
    <footer className="border-t-foreground/10 text-muted flex h-auto w-full flex-col items-center justify-center gap-4 border-t py-6 text-sm">
      <p className="m-0">
        © {new Date().getFullYear()} Ekomjah Denis. All rights reserved.
      </p>
      <div className="max-w-page flex w-full flex-col gap-4 flex-wrap items-center md:justify-between md:flex-row">
        <div className="text-muted flex flex-col gap-1 text-xs">
          <p className="m-0 text-justify">
            Built with Next.js and TypeScript. Deployed on Vercel.
          </p>
          <p>Text is set in Geist, Inter or Lusitana fonts.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
