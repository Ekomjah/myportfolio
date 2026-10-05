import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Users } from "lucide-react";
import { lusitana } from "@/app/ui/fonts";
import { RelatedProjects } from "@/app/ui/related-projects";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const metadata: Metadata = {
  title: "Penny Wise",
  description:
    "Penny Wise is a financial-literacy app for pre-teens and teens — short two-minute Tutorials and open-ended Labs that teach counting money, making change and simple budgeting.",
  alternates: { canonical: "/projects/penny-wise" },
};

const shots = [
  {
    src: "/projects/penny-wise/login.png",
    alt: "Penny Wise's sign-in screen, with the app's dark rounded shell and the Penny Wise mark in the top-left.",
  },
  {
    src: "/projects/penny-wise/learning.png",
    alt: "A lesson in progress: a single multiple-choice activity about what money is, with a course outline listing the next modules.",
  },
  {
    src: "/projects/penny-wise/dashboard.png",
    alt: "The learning dashboard showing continue-learning state and stats for XP, lessons completed, and courses enrolled.",
  },
];

const workflow = [
  {
    term: "One activity at a time",
    body: "Lessons are deliberately small — a single question on screen, check the answer, move on. For a twelve-year-old who has never thought about what a coin is worth, a wall of text is a wall of nothing.",
  },
  {
    term: "Tutorials and Labs",
    body: "Tutorials are two-minute guided steps; Labs are open-ended sandboxes. The split lets a beginner be walked through the basics and then poke at the idea without a script telling them what to do next.",
  },
  {
    term: "Progress that persists",
    body: "XP, lessons completed, courses enrolled and courses completed are all tracked server-side, so progress survives closing the tab and carries across sessions on the dashboard.",
  },
  {
    term: "Stays at the basics",
    body: "Counting money, making change, simple budgeting. No investing, credit or taxes — the scope is everyday money, and staying inside it is what makes the rest land.",
  },
];

const architecture = [
  { label: "Frontend", items: ["Next.js (App Router)", "React", "Tailwind CSS"] },
  { label: "API", items: ["Node.js", "Express", "Mongoose"] },
  { label: "Database", items: ["MongoDB"] },
  { label: "Auth", items: ["JWT", "bcrypt"] },
  { label: "Tests", items: ["Jest", "Supertest", "Testing Library"] },
];

const impact = [
  "A twelve-year-old can count a pile of coins correctly after the first module.",
  "Making change stops being a guess and becomes something they can work out.",
  "A first budget is something they build themselves, not one handed down.",
  "The same content scales across a class, since progress is tracked per account.",
];

export default function PennyWisePage() {
  return (
    <div className="max-w-page mx-auto w-full px-4 py-8 md:px-8 md:py-12">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground focus-visible:outline-foreground group inline-flex items-center gap-1.5 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
      >
        <ArrowLeft className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transition-none" />
        All projects
      </Link>

      <div className="mt-8 flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:pb-12">
        <div className="space-y-2.5 text-balance">
          <div className="border-border bg-muted text-muted-foreground inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-sm font-medium">
            <Users className="size-3.5 shrink-0" />
            Open source · Built with a team of 6
          </div>
          <h1
            className={`${lusitana.className} m-0 text-[32px] leading-tight font-medium tracking-tight lg:text-[40px]`}
          >
            Penny Wise
          </h1>
          <p className="text-muted-foreground m-0 text-base/7 lg:text-lg/7">
            A financial-literacy app for pre-teens and teens, built to teach
            money the way they meet it — counting it, making change from it, and
            budgeting it.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://github.com/ekomjah/penny-wise"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Penny Wise source on GitHub (opens in a new tab)"
            className="border-border bg-background hover:bg-muted focus-visible:outline-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-9 items-center gap-1.5 rounded-lg border px-3.5 text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:outline-none"
          >
            <SiGithub /> Source
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={shots[0].src}
          alt={shots[0].alt}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="text-muted-foreground mt-16 space-y-6 *:max-w-[65ch] [&_a]:underline [&_a]:underline-offset-2">
        <div className="inline-flex items-center gap-2 font-medium">
          <span>2026</span>
          <span aria-hidden="true">·</span>
          <span>Education · K–12</span>
        </div>

        <p className="m-0">
          Most money apps assume you already know what you are looking at. Penny
          Wise starts where a kid actually is: what a coin is worth, how to hand
          someone the right change, how to spread a fixed amount across a week.
          Short two-minute Tutorials walk through it, then open-ended Labs let
          them play with the idea until it sticks.
        </p>

        <p className="m-0">
          The important design decision is what it refuses to do. It is not a
          fixed curriculum and it does not drift into investing, credit or
          taxes — it stays at everyday basics, because that is the layer where
          the confusion actually starts.
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={shots[1].src}
            alt={shots[1].alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Workflow decisions:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {workflow.map(({ term, body }) => (
              <li key={term}>
                <span className="font-medium">{term}</span> — {body}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={shots[2].src}
            alt={shots[2].alt}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Architecture choices:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {architecture.map(({ label, items }) => (
              <li key={label}>
                <span className="font-medium">{label}:</span> {items.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="m-0 font-semibold">Impact:</p>
          <ul className="m-0 list-disc space-y-2 pl-5">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="m-0">
          A note on credit: this was open-source team work, and my{" "}
          <span className="font-medium">GitHub history on the repository</span>{" "}
          shows what I contributed against a shared codebase. The frontend and
          API split into their own <span className="font-medium">frontend/</span>{" "}
          and <span className="font-medium">backend/</span> packages so several
          people could work in parallel without stepping on each other, with
          Jest and Supertest on both sides to keep the seams honest.
        </p>
      </div>

      <RelatedProjects current="Penny Wise" />
    </div>
  );
}