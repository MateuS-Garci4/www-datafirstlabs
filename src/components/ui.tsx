import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Rótulo no estilo "DATAFIRST | SEÇÃO" usado na apresentação da marca. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-mist">
      DataFirst <span className="mx-1.5 text-steel">|</span>{" "}
      <span className="text-gold">{children}</span>
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-mono text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-mist">{lead}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  variant?: "gold" | "outline" | "ghost";
  arrow?: boolean;
  external?: boolean;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

export function Button({
  href,
  variant = "gold",
  arrow = false,
  external = false,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const styles = {
    gold: "bg-gold text-ink hover:bg-gold-300",
    outline: "chip border border-white/15 text-white hover:border-gold/60",
    ghost: "text-white hover:text-gold",
  }[variant];
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-colors ${styles} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}

/** Cabeçalho das páginas internas. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="aurora-soft grain relative overflow-hidden border-b border-white/5 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <Container className="relative z-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-mono text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/85 sm:text-xl">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
