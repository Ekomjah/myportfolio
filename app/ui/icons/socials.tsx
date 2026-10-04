import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import LinkedIn from "./LinkedIn";

export type Social = {
  id: string;
  href: string;
  icon: ReactNode;
};

export const socials: Social[] = [
  {
    id: "email",
    href: "mailto:ekomjahedet@gmail.com",
    icon: (
      <Mail strokeWidth={2.5} size={18} className="shrink-0 translate-y-px" />
    ),
  },
  {
    id: "x",
    href: "https://x.com/ekz_dee",
    icon: (
      <SiX
        size={15}
        className="shrink-0 -translate-y-px stroke-current stroke-1"
      />
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/ekomjah",
    icon: <LinkedIn className="size-[18px] shrink-0" />,
  },
  {
    id: "github",
    href: "https://github.com/ekomjah",
    icon: <SiGithub size={18} className="shrink-0 -translate-y-px" />,
  },
];

const LINK =
  "inline-flex items-center gap-[4px] align-middle text-black no-underline hover:scale-105 transition-transform duration-200 dark:text-white";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-x-4">
      {socials.map(({ id, href, icon }) => (
        <Link key={id} href={href} className={LINK}>
          {icon}
        </Link>
      ))}
    </div>
  );
}
