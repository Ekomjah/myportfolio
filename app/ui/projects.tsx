interface Project {
  name: string;
  status: "completed" | "upcoming";
  image?: string;
  url: string;
  demo?: string;
  desc: string;
  icon: React.ReactNode;
}
const projects: Project[] = [
  {
    name: "Captura",
    status: "completed",
    icon: <ScanSquare />,
    image: "/projects/Captura.png",
    url: "github.com/ekomjah/captura",
    demo: "https://captura-captures.vercel.app",
    desc: "an asset capture, search, and store SaaS",
  },
  {
    name: "dortrl",
    status: "upcoming",
    icon: <Cable />,
    url: "github.com/ekomjah/dortrl",
    // demo: "dortrl.vercel.app",
    desc: "a URL shortener and link management system",
  },
  {
    name: "Penny-wise",
    status: "completed",
    // image: "/projects/Penny-wise.png",
    url: "github.com/ekomjah/penny-wise",
    icon: <BadgeDollarSign />,
    // demo: "penny-wise.vercel.app",
    desc: "a personal finance management app",
  },
  {
    name: "Evendar",
    status: "upcoming",
    // image: "/projects/Evendar.png",
    url: "github.com/ekomjah/evendar",
    icon: <CalendarClock />,
    // demo: "evendar.vercel.app",
    desc: "a calendar and event management app",
  },
];
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import {
  Cable,
  BadgeDollarSign,
  CalendarClock,
  ScanSquare,
} from "lucide-react";
import { geistMono, geistSans, inter } from "./fonts";
export default function Projects() {
  return (
    <div
      className={` ${inter.className} grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {projects.map((project) => {
        return (
          <div
            key={project?.name}
            id="card"
            aria-description="projects-card"
            className="rounded-md border-gray-200 dark:border-gray-500 border p-2 flex flex-col"
          >
            <Link
              className="bg-gray-200 dark:bg-[#1c1c1c] p-4 rounded-md border border-white dark:border-gray-600"
              href={project?.demo || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={200}
                  height={200}
                  className="w-full rounded"
                />
              ) : (
                project.icon
              )}
            </Link>
            <div className="flex justify-between items-center gap-x-1">
              <h2 className={`${inter.className} text-lg font-bold`}>
                {project.name}
              </h2>
              <Link
                className="bg-gray-200 rounded-full dark:bg-[#1c1c1c] p-0.5 border border-white dark:border-gray-600"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={16} />
              </Link>
            </div>
            <div className={`${geistSans.className}`}>{project.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
