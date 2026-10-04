import ContributionGraph from "./ui/ContributionGraph";
import { lusitana, inter } from "./ui/fonts";
import {
  Mail,
  ArrowUpRight,
  Navigation,
  FolderBookmark,
  ArrowRight,
} from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Header from "./ui/Header";
import Projects from "./ui/projects";
import LinkedIn from "./ui/icons/LinkedIn";
import Stack from "./ui/stack";
export default function Home() {
  return (
    <main className="max-w-page mx-auto flex min-h-full w-full flex-col items-center justify-center px-4 py-8 md:p-8">
      <Header inter={inter} lusitana={lusitana} />

      <div
        id="description"
        className="text-muted border-foreground/10 mx-auto mt-8 space-y-2 border-b pb-8 text-lg"
      >
        <div className="max-w-[60ch] space-y-3">
          <p className="m-0">
            Hi, I&apos;m Ekomjah Denis, a full-stack software developer.
          </p>
          <p className="m-0">
            My skills span frontend and backend development, from optimizing
            page-load performance to building, deploying and scaling full-stack
            applications. I also work with design systems, state architecture,
            and authentication.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-1">
          <span className="pr-1">You can reach me via {"  "}</span>
          <Link
            href="mailto:ekomjahedet@gmail.com"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <Mail
              strokeWidth={2.5}
              size={18}
              className="shrink-0 translate-y-px"
            />
            <span>email</span>
          </Link>
          <span>or connect on</span>
          <Link
            href="https://x.com/ekz_dee"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <SiX
              size={15}
              className="shrink-0 -translate-y-px stroke-current stroke-1"
            />
            <span>@ekz_dee</span>
          </Link>
          <span>or</span>
          <Link
            href="https://www.linkedin.com/in/ekomjah"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <LinkedIn className="size-[18px] shrink-0" />
            <span>Ekomjah</span>
          </Link>
          <span className="pr-1">You can also see my code on</span>
          <Link
            href="https://github.com/ekomjah"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <SiGithub size={18} className="shrink-0 -translate-y-px" />
            <span>GitHub</span>
          </Link>
        </div>
        <div className="mt-6 mb-3 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="group bg-foreground text-background hover:bg-foreground/85 focus-visible:outline-foreground inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px motion-reduce:transition-none"
          >
            <FolderBookmark size={18} className="shrink-0" />
            <span>See my best work</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-foreground/20 bg-foreground/[0.03] text-foreground hover:border-foreground/40 hover:bg-foreground/[0.06] focus-visible:outline-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px motion-reduce:transition-none"
          >
            <Navigation size={18} className="shrink-0" />
            <span>View my Resumé</span>
            <ArrowUpRight
              size={15}
              className="shrink-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </div>

      <section
        id="projects"
        className="border-foreground/10 w-full border-b pb-12"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="group m-0 mt-8 flex w-fit items-center gap-2 text-xl font-bold">
              <span className="group-hover:text-muted transition-colors duration-200">
                Selected Projects
              </span>{" "}
            </h2>
            <p className="text-foreground/60 mt-2 mb-4 text-sm">
              A space for the work that best shows how I think and build...
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex shrink-0 items-center gap-2 text-sm font-medium"
          >
            <span className="group-hover:text-muted transition-colors duration-200">
              See everything
            </span>
            <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
          </Link>
        </div>
        <Projects />
      </section>
      <section id="projects" className="mb-4 w-full">
        <Stack />
      </section>

      <div className="max-w-page mx-auto mt-8 mb-6 w-[80vw] max-[580px]:w-full">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-lg font-semibold">Github Activity</p>
          <Link
            href="https://github.com/ekomjah"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <SiGithub size={18} className="shrink-0 -translate-y-px" />
            <span>GitHub</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <ContributionGraph login="ekomjah" />
      </div>
    </main>
  );
}
