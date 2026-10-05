/* eslint-disable @next/next/no-img-element */
// app/ui/stack.tsx
import type { LucideIcon } from "lucide-react";
import { Webhook, Zap, ArrowRight, FlaskConical } from "lucide-react";

// Colour brand logos from the Devicon and gilbarbara/logos repos, served by jsDelivr
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;
const logo = (name: string) =>
  `https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/${name}.svg`;

type Item = { name: string; icon: string | LucideIcon };
type Group = { title: string; items: Item[] };

const groups: Group[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "Python", icon: devicon("python") },
      { name: "Go", icon: devicon("go") },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Figma", icon: devicon("figma") },
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs") },
      {
        name: "Shadcn",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shadcnui.svg",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", icon: devicon("fastapi") },
      { name: "Express", icon: devicon("express") },
      { name: "Hono", icon: logo("hono") },
      { name: "AWS Lambda", icon: logo("aws-lambda") },
      { name: "RESTful APIs", icon: Webhook },
      { name: "Serverless Architecture", icon: Zap },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "React Testing Library", icon: logo("testing-library") },
      { name: "Jest", icon: devicon("jest", "plain") },
      { name: "Vitest", icon: devicon("vitest") },
      { name: "Playwright", icon: devicon("playwright") },
      { name: "Supertest", icon: FlaskConical },
      { name: "Postman", icon: devicon("postman") },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      { name: "AWS S3", icon: logo("aws-s3") },
      { name: "Terraform", icon: devicon("terraform") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "SQLite", icon: devicon("sqlite") },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: devicon("git") },
      { name: "CI/CD with GitHub Actions", icon: devicon("githubactions") },
      { name: "Docker", icon: devicon("docker") },
      { name: "AWS", icon: logo("aws") },
      { name: "Notion", icon: devicon("notion") },
      { name: "Jira", icon: devicon("jira") },
      { name: "Obsidian", icon: logo("obsidian-icon") },
    ],
  },
];

function Logo({ icon }: { icon: Item["icon"] }) {
  // White disc keeps dark logos (Next.js, Express, Notion) visible in dark theme
  const disc =
    "grid size-7 shrink-0 place-items-center rounded-full bg-white ring-1 ring-black/10";

  if (typeof icon === "string") {
    return (
      <span className={disc}>
        <img
          src={icon}
          alt=""
          width={18}
          height={18}
          loading="lazy"
          className="size-4.5 object-contain"
        />
      </span>
    );
  }

  const Icon = icon;
  return (
    <span className={disc}>
      <Icon className="size-4 text-neutral-800" aria-hidden="true" />
    </span>
  );
}

export default function Stack() {
  return (
    <main className="max-w-page mx-auto p-8 pt-4">
      <div className="group m-0 mt-8 flex w-fit items-center gap-2 text-xl font-bold">
        My Stack
      </div>
      <h3 className="text-muted-foreground mt-2 mb-4 text-lg">
        An overview of the tools i use to craft and bring to life, my innovative
        ideas
      </h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="border-foreground/10 hover:border-foreground/25 rounded-2xl border p-5 transition-colors duration-200"
          >
            <h3 className="text-foreground/50 text-xs font-semibold tracking-wider uppercase">
              {group.title}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="border-foreground/10 hover:border-foreground/25 flex items-center gap-2 rounded-full border py-1 pr-3 pl-1 text-sm transition duration-200 hover:-translate-y-0.5"
                >
                  <Logo icon={item.icon} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
