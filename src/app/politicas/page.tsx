import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import { legalPages } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Políticas",
  description: "Políticas de privacidade, segurança, termos de uso e cookies da DataFirst.",
};

export default function PoliticasPage() {
  return (
    <>
      <PageHero
        eyebrow="Políticas"
        title="Transparência e responsabilidade."
        lead="Nossos compromissos com privacidade, segurança e uso responsável de dados."
      />
      <section className="py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            {legalPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="chip group flex items-center justify-between rounded-2xl border border-white/8 p-7 font-mono text-lg font-bold text-white hover:border-gold/40"
                >
                  {p.label}
                  <ArrowUpRight aria-hidden className="size-5 text-steel group-hover:text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
