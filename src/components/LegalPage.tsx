import type { ReactNode } from "react";
import Link from "next/link";
import { Container, PageHero } from "./ui";
import { legalUpdatedAt } from "@/content/site";

export const legalPages = [
  { href: "/politicas/privacidade/", label: "Privacidade" },
  { href: "/politicas/seguranca/", label: "Segurança e Confidencialidade" },
  { href: "/politicas/termos/", label: "Termos de Uso" },
  { href: "/politicas/cookies/", label: "Cookies" },
];

export function LegalPage({
  title,
  lead,
  current,
  children,
}: {
  title: string;
  lead: string;
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Políticas" title={title} lead={lead} />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Políticas" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {legalPages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    aria-current={p.href === current ? "page" : undefined}
                    className="block rounded-lg px-3 py-2 text-[15px] text-mist hover:text-white aria-[current=page]:bg-white/5 aria-[current=page]:text-gold"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <article className="prose-legal max-w-3xl text-fog">
            <p className="text-sm text-mist">Última atualização: {legalUpdatedAt}</p>
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
