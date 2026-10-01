import Image from "next/image";
import Navbar from "@/app/ui/Navbar";
import ContributionGraph from "./ui/ContributionGraph";
import { geistMono, inter, lusitana } from "./ui/fonts";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full max-w-page mx-auto">
        <header
          id="home"
          className="flex flex-nowrap items-center justify-around w-full mt-4"
        >
          <Image
            src="/images/me.png"
            alt="Portrait of Ekomjah Denis"
            className="w-50 h-50 object-cover border-4 dark:border-gray-600 border-gray-300 rounded-full"
            width={200}
            height={200}
            priority
          />
          <div className={inter.className}>
            <h1 className="m-0 text-center text-2xl text-foreground">
              Hi, I’m Ekomjah Denis
            </h1>
            <p className="text-center text-foreground/60">
              A Full-stack Developer
            </p>
          </div>
        </header>

        <div
          className={`mx-auto mt-8 mb-6 w-[80vw] max-w-page text-[1.3rem] text-[#5e5959] dark:text-[#748D96] text-justify`}
        >
          I&apos;m a full-stack engineer. I like building things people actually
          enjoy using: small, finished, and out in the world rather than sitting
          in a branch. Most of the work goes into the details nobody is meant to
          notice, which is the part I like most. You can reach me at anishfn,
          via email, or see my code on GitHub.
        </div>

        {/* <div className="flex flex-nowrap justify-end items-end gap-6 mr-[12vw]">
        <a
          href="https://x.com/ekomjahedet"
          aria-label="X (Twitter)"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/ekz_dee/"
          aria-label="Instagram"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@ekz_dee"
          aria-label="YouTube"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a
          href="mailto:ekomjahedet@gmail.com"
          aria-label="Email"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://github.com/ekomjah"
          aria-label="GitHub"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="tel:+2347049650155"
          aria-label="Phone"
          className="no-underline text-[#414040] text-2xl hover:text-[#0000ff]"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div> */}

        {/* REMEMBER TO ADD ALL YOUR SOCIAL ICONS HERE FIRST! */}

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
                Developer with 1+ years of experience in using many software
                tools and technologies, ranging from languages to version
                control systems that track code changes.
              </p>
              <p className="col-span-2 my-[0.8rem] text-[1.3rem] text-[#5e5959] text-justify">
                I am dedicated to producing quality software with great
                aesthetics, ease of use and user experience while maintaining
                the core software principles. Coding has become part of my life,
                and I see it as the best way of using my time, with the aim of
                impacting people, both old and young, with the software I
                architect and develop.
              </p>
              <p className="col-span-1 my-[0.8rem] text-[1.3rem] text-[#5e5959] text-justify">
                I act as a geek sometimes, spending most of my leisure playing
                thinking-intensive games like chess, practicing my guitar, or
                just surfing the Net or scrolling endlessly through TikTok.
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
              Here are some of the languages and technologies I am conversant
              with and what I’ve built with them:
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
    </>
  );
}
