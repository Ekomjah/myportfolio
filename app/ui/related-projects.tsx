import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

type Project = {
  name: string;
  href: string;
  image?: string | React.ReactNode;
  category: string;
};

const projects: Project[] = [
  {
    name: "Captura",
    href: "/projects/captura",
    image: "/projects/captura/Captura.png",
    category: "Asset management",
  },
  {
    name: "Hunt Mart",
    href: "/projects/huntmart",
    image: "/projects/huntmart/shop.png",
    category: "E-commerce",
  },
  {
    name: "Penny Wise",
    href: "/projects/penny-wise",
    image: <BadgeDollarSign size={40} className="text-muted-foreground" />,
    category: "Education · K–12",
  },
  {
    name: "dortrl",
    href: "https://github.com/ekomjah/dortrl",
    category: "In progress",
  },
  {
    name: "Evendar",
    href: "https://github.com/ekomjah/evendar",
    category: "In progress",
  },
];

export function RelatedProjects({ current }: { current: string }) {
  const others = projects.filter((p) => p.name !== current).slice(0, 3);

  return (
    <div className="mt-16 space-y-4">
      <Link
        href="/projects"
        className="group focus-visible:outline-foreground inline-flex w-fit items-center gap-1 transition-opacity duration-200 hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
      >
        <span className="text-lg font-medium">Other Projects</span>
        <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
      </Link>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => {
          const external = project.href.startsWith("http");

          return (
            <Link
              key={project.name}
              href={project.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group focus-visible:outline-foreground flex flex-col gap-2.5 rounded-lg pb-3 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
            >
              <div className="bg-muted relative aspect-[3/2] overflow-hidden rounded-[10px] border">
                {project.image ? (
                  typeof project.image === "string" ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  ) : (
                    project.image
                  )
                ) : (
                  <span className="text-muted-foreground flex h-full w-full items-center justify-center text-sm">
                    {project.name}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="grow text-sm font-medium">{project.name}</span>
                <span className="bg-secondary text-muted-foreground group-hover:text-foreground shrink-0 rounded-[5px] px-1.5 py-0.5 text-[10px] leading-[14px] transition-colors duration-200">
                  {project.category}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
