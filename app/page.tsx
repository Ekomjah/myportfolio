import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <ul>
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header id="home">
        <Image
          fill
          src="/images/me.jpg"
          alt="Portrait of Ekomjah Denis"
          className="header-Image"
        />
        <div>
          <h1 className="header-name">Hi, I’m Ekomjah Denis</h1>
          <p className="job-desc">A Full-stack Developer</p>
        </div>
      </header>

      <div className="contact-headerwrappper">
        <a href="https://x.com/ekomjahedet" aria-label="X (Twitter)">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/ekz_dee/" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@ekz_dee" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="mailto:ekomjahedet@gmail.com" aria-label="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/ekomjah" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="tel:+2347049650155" aria-label="Phone">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      {/* REMEMBER TO ADD ALL YOUR SOCIAL ICONS HERE FIRST! */}

      <main>
        <section id="about">
          <Image
            fill
            src="https://media.istockphoto.com/id/2013971698/photo/it-programmer-using-computer.jpg?s=612x612&w=0&k=20&c=BllC3Dt9V7ToH3OM-7wGJBEqeW_gCxasWYm4ra8x9vY="
            alt="me in a typical coding session"
          />
          <div className="tools-stack">
            <i className="fa-regular fa-circle-user"></i>
            <h2 className="id">About Me</h2>
          </div>

          <div className="about">
            <p>
              My name is Ekomjah Denis, a 16-year-old Full-stack Software
              Developer with 1+ years of experience in using many software tools
              and technologies, ranging from languages to version control
              systems that track code changes.
            </p>
            <p>
              I am dedicated to producing quality software with great
              aesthetics, ease of use and user experience while maintaining the
              core software principles. Coding has become part of my life, and I
              see it as the best way of using my time, with the aim of impacting
              people, both old and young, with the software I architect and
              develop.
            </p>
            <p>
              I act as a geek sometimes, spending most of my leisure playing
              thinking-intensive games like chess, practicing my guitar, or just
              surfing the Net or scrolling endlessly through TikTok.
            </p>
            <div className="resume">
              <a href="/resume.pdf" download>
                <i className="fa-solid fa-briefcase"></i>
                <p>Download my Resume</p>
              </a>
            </div>
          </div>
        </section>

        <section id="projects">
          <Image
            className="projects-banner"
            src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
            alt="Programmer working with code"
          />
          <div className="tools-stack">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <h2 className="id">Technologies</h2>
          </div>
          <h3 className="techstack-para">
            Here are some of the languages and technologies I am conversant with
            and what I’ve built with them:
          </h3>

          <div className="mytechstack">
            <ul className="techstack-list">
              <li className="techstack-item">
                <i className="fa-brands fa-html5"></i>
                <p>HTML</p>
              </li>
              <li className="techstack-item">
                <i className="fa-brands fa-css3-alt"></i>
                <p>CSS</p>
              </li>
              <li className="techstack-item">
                <i className="fa-brands fa-js"></i>
                <p>JavaScript</p>
              </li>
              <li className="techstack-item">
                <i className="fa-brands fa-python"></i>
                <p>Python</p>
              </li>
              <li className="techstack-item">
                <i className="fa-solid fa-terminal"></i>
                <p>Command Line Interface</p>
              </li>
              <li className="techstack-item">
                <i className="fa-brands fa-git-alt"></i>
                <p>Git</p>
              </li>
              <li className="techstack-item">
                <i className="fa-brands fa-react"></i>
                <p>React</p>
              </li>
            </ul>
          </div>

          <div className="projects">
            <div className="blog-post-card">
              <Image
                src="https://i.postimg.cc/JhNPDgFZ/portfolio.png"
                alt="my personal website"
              />
              <div className="post-content">
                <h2 className="post-title">My Portfolio</h2>
                <a
                  href="https://ekomjah.github.io/myportfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Live
                </a>
                <a
                  href="https://github.com/Ekomjah/myportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="blog-post-card">
              <Image
                src="https://i.postimg.cc/rFwCyzc1/rps.png"
                alt="an rps game"
              />
              <div className="post-content">
                <h2 className="post-title">Rock Paper Scissors Game</h2>
                <a
                  href="https://ekomjah.github.io/rock-paper-scissors-javascript-console-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Live
                </a>
                <a
                  href="https://github.com/Ekomjah/rock-paper-scissors-javascript-console-game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="blog-post-card">
              <Image
                src="https://i.postimg.cc/Wzj8w7QC/palindrome.png"
                alt="a palindrome checker"
              />
              <div className="post-content">
                <h2 className="post-title">A Palindrome Checker</h2>
                <a
                  href="https://ekomjah.github.io/is-it-a-palindrome-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Live
                </a>
                <a
                  href="https://github.com/Ekomjah/is-it-a-palindrome-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="blog-post-card">
              <Image
                src="https://i.postimg.cc/zGdQD49B/plp.png"
                alt="a product landing page"
              />
              <div className="post-content">
                <h2 className="post-title">A Product Landing Page</h2>
                <a
                  href="https://ekomjah.github.io/Atomica/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Live
                </a>
                <a
                  href="https://github.com/Ekomjah/Atomica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="blog-post-card">
              <Image
                src="https://i.postimg.cc/FFB1cK3g/tdp.png"
                alt="a technical documentation page"
              />
              <div className="post-content">
                <h2 className="post-title">A Technical Documentation Page</h2>
                <a
                  href="https://github.com/Ekomjah/Main-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="tools-stack">
            <i className="fa-solid fa-envelope"></i>
            <h2 className="id">Contact</h2>
          </div>
          <p>
            Want to work together? Email me at{" "}
            <a href="mailto:ekomjahedet@gmail.com">ekomjahedet@gmail.com</a>.
          </p>
        </section>
      </main>
    </>
  );
}
