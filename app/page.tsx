import ContributionGraph from "./ui/ContributionGraph";
import { lusitana, inter } from "./ui/fonts";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Header from "./ui/Header";
import Projects from "./ui/projects";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full mx-auto max-w-page min-h-full p-8">
      <Header inter={inter} lusitana={lusitana} />

      <div
        id="description"
        className="mx-auto mt-8 mb-6 text-lg text-muted space-y-2"
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
            className="inline-flex items-center gap-[4px] align-middle no-underline text-black dark:text-white hover:underline"
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
            className="inline-flex items-center gap-[4px] align-middle no-underline text-black dark:text-white hover:underline"
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
            className="inline-flex items-center gap-[4px] align-middle no-underline text-black dark:text-white hover:underline"
          >
            <SiGithub size={18} className="shrink-0 -translate-y-px" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
      <Projects />

      <div className="mx-auto mt-8 mb-6 w-[80vw] max-w-page max-[580px]:w-full">
        <div className="flex mb-2 justify-between items-center">
          <p>Github Activity</p>
          <Link
            href="https://github.com/ekomjah"
            className="inline-flex items-center gap-[4px] align-middle no-underline text-black dark:text-white hover:underline"
          >
            <SiGithub size={18} className="shrink-0 -translate-y-px" />
            <span>GitHub</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <ContributionGraph login="ekomjah" />
      </div>

      <section
        id="projects"
        className="scroll-mt-[90px] rounded-[30px] bg-[#f8f8f8] mb-4 p-4"
      >
        <div className="flex justify-start items-center gap-4 mt-8">
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <h2 className="m-0 text-[2rem] font-bold">Technologies</h2>
        </div>
        <h3 className="text-[1.3rem] text-[#5e5959] font-extralight">
          Here are some of the languages and technologies I am conversant with
          and what I’ve built with them:
        </h3>
      </section>

      <section id="contact" className="scroll-mt-[90px]">
        <div className="flex justify-start items-center gap-4 mt-8">
          <i className="fa-solid fa-envelope"></i>
          <h2 className="m-0 text-[2rem] font-bold">Contact</h2>
        </div>
        <p>
          Want to work together? Email me at{" "}
          <a href="mailto:ekomjahedet@gmail.com">ekomjahedet@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
