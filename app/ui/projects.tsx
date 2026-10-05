interface Project {
  name: string;
  status: "completed" | "upcoming";
  image?: string;
  url: string;
  demo?: string;
  desc: string;
  icon: React.ReactNode;
  detailsUrl?: string;
}

const MEDIA =
  "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md";
const ICON = "size-10 text-foreground/70";
const projects: Project[] = [
  {
    name: "Captura",
    status: "completed",
    icon: <ScanSquare size={40} />,
    image: "/projects/captura/Captura.png",
    url: "https://github.com/ekomjah/captura",
    demo: "https://captura-captures.vercel.app",
    desc: "An asset capture, search, and store SaaS",
    detailsUrl: "/projects/captura",
  },
  {
    name: "Penny-wise",
    status: "completed",
    // image: "/projects/Penny-wise.png",
    url: "https://github.com/ekomjah/penny-wise",
    icon: <BadgeDollarSign size={40} />,
    // demo: "penny-wise.vercel.app",
    desc: "A finance literacy app",
    detailsUrl: "/projects/penny-wise",
  },
  {
    name: "Huntmart",
    status: "completed",
    icon: <ShoppingBag size={40} />,
    url: "https://github.com/ekomjah/huntmart",
    demo: "https://huntmart.netlify.app/shop",
    desc: "An e-commerce platform",
    detailsUrl: "/projects/huntmart",
    image: "/projects/huntmart/shop.png",
  },
  {
    name: "dortrl",
    status: "upcoming",
    icon: <Cable size={40} />,
    url: "https://github.com/ekomjah/dortrl",
    // demo: "dortrl.vercel.app",
    desc: "A URL shortener and link management system",
  },
  {
    name: "Evendar",
    status: "upcoming",
    // image: "/projects/Evendar.png",
    url: "https://github.com/ekomjah/evendar",
    icon: <CalendarClock size={40} />,
    // demo: "evendar.vercel.app",
    desc: "A calendar scheduling software",
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
  ShoppingBag,
} from "lucide-react";
import { geistSans, inter } from "./fonts";
export default function Projects() {
  return (
    <div
      className={` ${inter.className} grid w-full grid-cols-1 gap-4 md:grid-cols-2`}
    >
      {projects.map((project) => {
        const locked = project.status !== "completed";

        return (
          <article
            key={project.name}
            className="flex flex-col gap-2 rounded-md border border-gray-200 p-2 dark:border-gray-900"
          >
            {locked ? (
              <div
                aria-disabled="true"
                className={`${MEDIA} bg-gray-200 dark:bg-[#1c1c1c]`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <span className={ICON}>{project.icon}</span>
                )}

                <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-black/55 py-1 pr-2 pl-1.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  <Lock size={11} aria-hidden="true" />
                  In progress
                </span>
              </div>
            ) : (
              <Link
                className={`${MEDIA} focus-visible:outline-foreground bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-[#1c1c1c]`}
                href={project.detailsUrl ?? project.url}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-200 hover:scale-105 hover:transform"
                  />
                ) : (
                  <span
                    className={`${ICON} transition-transform duration-200 hover:scale-115 hover:transform`}
                  >
                    {project.icon}
                  </span>
                )}
              </Link>
            )}

            <div className="flex items-start justify-between gap-x-2">
              {project.demo ? (
                <Link
                  className={`${inter.className} hover:decoration-muted-foreground focus-visible:outline-foreground m-0 text-lg font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2`}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Link>
              ) : (
                <h2 className={`${inter.className} m-0 text-lg font-bold`}>
                  {project.name}
                </h2>
              )}
              {locked ? (
                <span
                  aria-disabled="true"
                  title={`${project.name} is not public yet`}
                  className="text-muted-foreground/50 shrink-0 rounded-full border border-gray-200 p-0.5 dark:border-gray-800"
                >
                  <SiGithub size={16} />
                  <span className="sr-only">
                    {project.name} is not public yet
                  </span>
                </span>
              ) : (
                <Link
                  className="focus-visible:outline-foreground shrink-0 rounded-full border border-gray-300 p-0.5 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-gray-600"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                >
                  <SiGithub size={16} />
                </Link>
              )}
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
