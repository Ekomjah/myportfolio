import ContributionGraph from "./ui/ContributionGraph";
import { lusitana, inter } from "./ui/fonts";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Header from "./ui/Header";
import Projects from "./ui/projects";
export default function Home() {
  return (
    <main className="max-w-page mx-auto flex min-h-full w-full flex-col items-center justify-center p-8">
      <Header inter={inter} lusitana={lusitana} />

      <div
        id="description"
        className="text-muted border-foreground/10 mx-auto mt-8 space-y-2 border-b pb-8 text-lg"
      >
        <div>
          <p>Hi, I&apos;m Ekomjah Denis, a Full-stack Software Developer.</p>
          <p>
            {" "}
            My skills span frontend and backend development, from optimizing
            page-load performance to building, deploying and scaling full-stack
            applications. I also work with design systems, state architecture
            and authentication
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
          <span>,</span>
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
          <span className="pr-1">or see my code on</span>
          <Link
            href="https://github.com/ekomjah"
            className="inline-flex items-center gap-[4px] align-middle text-black no-underline hover:underline dark:text-white"
          >
            <SiGithub size={18} className="shrink-0 -translate-y-px" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>

      <section id="projects" className="mb-4 w-full">
        <div className="m-0 mt-8 text-xl font-bold">Selected Projects</div>
        <h3 className="text-muted mt-2 mb-4 text-lg">
          A space for the work that best shows how I think and build...
        </h3>
        <Projects />
      </section>

      <div className="max-w-page mx-auto mt-8 mb-6 w-[80vw] max-[580px]:w-full">
        <div className="mb-2 flex items-center justify-between">
          <p>Github Activity</p>
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
