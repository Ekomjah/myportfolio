import ContributionGraph from "./ui/ContributionGraph";
import { lusitana, inter } from "./ui/fonts";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Header from "./ui/Header";
import Projects from "./ui/projects";
import Stack from "./ui/stack";
import Description from "./ui/desc";

export default function Home() {
  return (
    <main className="max-w-page mx-auto flex min-h-full w-full flex-col items-center justify-center px-4 py-8 md:p-8">
      <Header inter={inter} lusitana={lusitana} />
      <Description />
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
