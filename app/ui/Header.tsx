import Image from "next/image";
interface HeaderProps {
  inter: { className: string };
  lusitana: { className: string };
}

export default function Header({ inter, lusitana }: HeaderProps) {
  return (
    <header
      id="home"
      className="mt-10 flex w-full scroll-mt-22.5 flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-12"
    >
      <Image
        src="/images/me.png"
        alt="Portrait of Ekomjah Denis"
        className="border-foreground/15 size-[168px] shrink-0 rounded-full border-4 object-cover sm:size-[200px]"
        width={200}
        height={200}
        priority
      />

      <div className="min-w-0">
        <strong
          className={`${inter.className} text-muted-foreground m-0 flex items-center gap-2 font-mono text-sm font-bold tracking-[0.18em] uppercase`}
        >
          {`<Full-stack developer/>`}
        </strong>
        <h1
          className={`${lusitana.className} text-foreground m-0 mt-3 text-[42px] leading-[1.04] tracking-tight sm:text-[56px]`}
        >
          Ekomjah Denis
        </h1>{" "}
        <span
          className={`${inter.className} border-foreground/15 text-foreground mt-4 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-sm font-medium`}
        >
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-500/60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to new work
        </span>
      </div>
    </header>
  );
}
