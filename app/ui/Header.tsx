import Image from "next/image";
interface HeaderProps {
  inter: { className: string };
  lusitana: { className: string };
}

export default function Header({ inter, lusitana }: HeaderProps) {
  return (
    <header
      id="home"
      className="scroll-mt-22.5 mt-10 flex w-full flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-12"
    >
      <Image
        src="/images/me.png"
        alt="Portrait of Ekomjah Denis"
        className="size-[168px] shrink-0 rounded-full border-4 border-foreground/15 object-cover sm:size-[200px]"
        width={200}
        height={200}
        priority
      />

      <div className="min-w-0">
        <strong
          className={`${inter.className} m-0 flex items-center gap-2 font-mono font-bold text-[12px] uppercase tracking-[0.18em] text-muted`}
        >
          {`<Full-stack developer/>`}
        </strong>
        <h1
          className={`${lusitana.className} m-0 mt-3 text-[42px] leading-[1.04] tracking-tight text-foreground sm:text-[56px]`}
        >
          Ekomjah Denis
        </h1>
      </div>
    </header>
  );
}
