import ContributionGraph from "./ui/ContributionGraph";
import { lusitana, inter } from "./ui/fonts";
import { Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Header from "./ui/Header";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto max-w-page min-h-full p-8">
      <Header inter={inter} lusitana={lusitana} />

      <div
        id="description"
        className="mx-auto mt-8 mb-6 text-lg text-muted space-y-2"
      >
        <div>
          I&apos;m a full-stack engineer. I like building things people actually
          enjoy using: practical, and useful, rather than sitting in a branch.
          My skillsets span building frontend and backend systems, from
          optimising page-load performance to building, deploying and scaling
          full applications, including design systems, state architecture and
          authentication.
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

      <div className="mx-auto mt-8 mb-6 w-[80vw] max-w-page max-[580px]:w-full">
        <ContributionGraph login="ekomjah" />
      </div>

      <main className="mx-auto my-2.5 w-[80vw] max-w-page rounded-2xl border border-transparent p-8 max-[580px]:w-full">
        <section
          id="about"
          className="scroll-mt-[90px] rounded-[30px] bg-[#f8f8f8] mb-4 p-4 text-justify"
        >
          <div className="flex justify-start items-center gap-4 mt-8">
            <i className="fa-regular fa-circle-user"></i>
            <h2 className="m-0 text-[2rem] font-bold">About Me</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <p className="col-span-2 my-[0.8rem] text-[1.3rem] text-[#5e5959] text-justify">
              My name is Ekomjah Denis, a 16-year-old Full-stack Software
              Developer with 1+ years of experience in using many software tools
              and technologies, ranging from languages to version control
              systems that track code changes.
            </p>
            <p className="col-span-2 my-[0.8rem] text-[1.3rem] text-[#5e5959] text-justify">
              I am dedicated to producing quality software with great
              aesthetics, ease of use and user experience while maintaining the
              core software principles. Coding has become part of my life, and I
              see it as the best way of using my time, with the aim of impacting
              people, both old and young, with the software I architect and
              develop.
            </p>
            <p className="col-span-1 my-[0.8rem] text-[1.3rem] text-[#5e5959] text-justify">
              I act as a geek sometimes, spending most of my leisure playing
              thinking-intensive games like chess, practicing my guitar, or just
              surfing the Net or scrolling endlessly through TikTok.
            </p>
            <div className="col-[2/3] mx-12 my-0 rounded-[10px] border border-transparent text-center">
              <a href="/resume.pdf" download className="no-underline">
                <i className="text-[5rem] text-black rounded-full border border-transparent p-8 bg-[#c4da49]"></i>
                <p className="text-center my-[0.8rem] text-[1.3rem] text-[#0000ff] hover:underline active:underline">
                  Download my Resume
                </p>
              </a>
            </div>
          </div>
        </section>

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
    </div>
  );
}
