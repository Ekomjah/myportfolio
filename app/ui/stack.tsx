/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;
const logo = (name: string) =>
  `https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/${name}.svg`;
const simpleIcon = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const tools = [
  {
    name: "Figma",
    role: "Design Tool",
    icon: devicon("figma"),
    url: "https://www.figma.com",
  },
  {
    name: "React",
    role: "JavaScript Library",
    icon: devicon("react"),
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    role: "React Framework",
    icon: devicon("nextjs"),
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    role: "Programming Language",
    icon: devicon("typescript"),
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Python",
    role: "Programming Language",
    icon: devicon("python"),
    url: "https://www.python.org",
  },
  {
    name: "AWS",
    role: "Cloud Computing Platform",
    icon: logo("aws"),
    url: "https://aws.amazon.com",
  },
  {
    name: "Terraform",
    role: "Infrastructure-as-code Tool",
    icon: devicon("terraform"),
    url: "https://www.terraform.io",
  },
  {
    name: "Zed",
    role: "Code Editor",
    icon: simpleIcon("zedindustries"),
    url: "https://zed.dev",
  },
];

export default function Stack() {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="text-foreground/60 mt-1 text-sm">
            The tools I reach for to design, build and ship.
          </p>
        </div>

        <Link
          href="/stack"
          className="group flex shrink-0 items-center gap-2 text-sm font-medium"
        >
          <span className="group-hover:text-muted-foreground transition-colors duration-200">
            See everything
          </span>
          <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </Link>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.name}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-foreground/10 hover:border-foreground/25 hover:bg-foreground/10 focus-visible:border-foreground/25 focus-visible:ring-foreground/30 flex items-center justify-between gap-4 rounded-2xl border p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
            >
              {/* White disc keeps dark logos visible in dark theme */}
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105">
                  <img
                    src={tool.icon}
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                    className="size-6 object-contain"
                  />
                </span>
                <div className="min-w-0">
                  <p className="leading-tight font-semibold">{tool.name}</p>
                  <p className="text-foreground/60 mt-0.5 text-sm">
                    {tool.role}
                  </p>
                </div>
              </div>

              <LinkIcon
                className="text-foreground/50 ml-auto size-4 shrink-0 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
