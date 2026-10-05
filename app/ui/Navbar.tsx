import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { DropdownMenuIcons } from "./dropDown";
import CopyEmail from "./copyEmail";

const SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "resume", label: "Resumé" },
  { id: "blog", label: "Blog" },
];

export default function NavBar() {
  return (
    <header className="border-foreground/10 bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="max-w-page mx-auto flex w-[80vw] items-center gap-[12px] p-4 px-[16px] max-[580px]:w-full md:p-2">
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

        <div className="hidden min-w-0 flex-1 items-center justify-between md:flex">
          <nav
            aria-label="Primary"
            className="min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex items-center gap-[2px]">
              {SECTIONS.map(({ id, label }) => (
                <li key={id} className="shrink-0">
                  <Link
                    href={`/${id}`}
                    className="text-foreground/55 hover:text-foreground focus-visible:outline-foreground flex items-center gap-[6px] rounded-full px-[12px] py-[8px] text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <CopyEmail />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 justify-end md:hidden">
          <nav
            aria-label="Primary"
            className="min-w-0 scrollbar-none overflow-x-auto [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex items-center justify-end gap-0.5">
              {SECTIONS.slice(0, 2).map(({ id, label }) => (
                <li key={id} className="shrink-0">
                  <Link
                    href={`/${id}`}
                    className="text-foreground/55 hover:text-foreground focus-visible:outline-foreground flex items-center gap-[6px] rounded-full px-[12px] py-[8px] text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <DropdownMenuIcons />
        </div>
      </div>
    </header>
  );
}
