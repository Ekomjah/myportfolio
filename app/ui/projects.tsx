interface Project {
  name: string;
  status: "completed" | "upcoming";
  image?: string;
  url: string;
  demo?: string;
  desc: string;
  icon: React.ReactNode;
}

const MEDIA =
  "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md";
const ICON = "size-10 text-foreground/70";
const projects: Project[] = [
  {
    name: "Captura",
    status: "completed",
    icon: <ScanSquare size={40} />,
    image: "/projects/Captura.png",
    url: "https://github.com/ekomjah/captura",
    demo: "https://captura-captures.vercel.app",
    desc: "an asset capture, search, and store SaaS",
  },
  {
    name: "Penny-wise",
    status: "completed",
    // image: "/projects/Penny-wise.png",
    url: "https://github.com/ekomjah/penny-wise",
    icon: <BadgeDollarSign size={40} />,
    // demo: "penny-wise.vercel.app",
    desc: "a personal finance management app",
  },
  {
    name: "dortrl",
    status: "upcoming",
    icon: <Cable size={40} />,
    url: "https://github.com/ekomjah/dortrl",
    // demo: "dortrl.vercel.app",
    desc: "a URL shortener and link management system",
  },
  {
    name: "Evendar",
    status: "upcoming",
    // image: "/projects/Evendar.png",
    url: "https://github.com/ekomjah/evendar",
    icon: <CalendarClock size={40} />,
    // demo: "evendar.vercel.app",
    desc: "a calendar scheduling software",
  },
];
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import {
  Cable,
  BadgeDollarSign,
  CalendarClock,
  Lock,
  ScanSquare,
} from "lucide-react";
import { geistSans, inter } from "./fonts";
export default function Projects() {
  return (
    <div
      className={` ${inter.className} grid grid-cols-1 gap-4 md:grid-cols-2 w-full`}
    >
      {projects.map((project) => {
        return (
          <article
            key={project.name}
            className="flex flex-col gap-2 rounded-md border border-gray-200 p-2 dark:border-gray-900"
          >
            <Link
              className={`${MEDIA} bg-gray-200 dark:bg-[#1c1c1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`}
              href={project.demo ?? project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover hover:transform hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <span
                  className={`${ICON} hover:transform hover:scale-115 transition-transform duration-200`}
                >
                  {project.icon}
                </span>
              )}

              {project.status !== "completed" && (
                <span
                  title="In progress"
                  className="absolute top-2 left-2 flex size-6 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm"
                >
                  <Lock size={12} aria-hidden="true" />
                  <span className="sr-only">In progress</span>
                </span>
              )}
            </Link>

            <div className="flex items-start justify-between gap-x-2">
              <h2 className={`${inter.className} m-0 text-lg font-bold`}>
                {project.name}
              </h2>
              <Link
                className="shrink-0 rounded-full border border-gray-300 p-0.5 dark:border-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
              >
                <SiGithub size={16} />
              </Link>
            </div>

            <p className={`${geistSans.className} m-0 text-sm`}>
              {project.desc}
            </p>
          </article>
        );
      })}
    </div>
  );
}
