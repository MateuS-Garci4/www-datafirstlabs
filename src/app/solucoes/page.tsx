import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { ContactCTA, ServiceCard } from "@/components/sections";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Análise de dados e BI, engenharia de dados, automação de processos, governança, cloud e inteligência artificial.",
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title={
          <>
            Tudo o que seus dados precisam para virar <span className="text-gold">resultado.</span>
          </>
        }
        lead="Soluções independentes ou combinadas, sempre conectadas a um objetivo de negócio claro e mensurável."
      />
      <section className="py-20 sm:py-28">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Container>
      </section>
      <ContactCTA
        title="Não sabe por onde começar?"
        text="Fazemos um diagnóstico inicial do seu cenário de dados e apontamos as oportunidades de maior retorno."
      />
    </>
  );
}
