import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronLeft } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import { ContactCTA, ServiceCard } from "@/components/sections";
import { ServiceIcon } from "@/components/icons";
import { getService, services } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solucoes/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: PageProps<"/solucoes/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="aurora-soft grain relative overflow-hidden border-b border-white/5 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <Container className="relative z-10">
          <Link
            href="/solucoes/"
            className="mb-10 inline-flex items-center gap-1 text-sm text-mist hover:text-gold"
          >
            <ChevronLeft aria-hidden className="size-4" />
            Todas as soluções
          </Link>
          <span className="mb-7 grid size-14 place-items-center rounded-2xl bg-gold text-ink">
            <ServiceIcon name={service.icon} className="size-7" />
          </span>
          <Eyebrow>Soluções</Eyebrow>
          <h1 className="max-w-4xl font-mono text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog/85 sm:text-xl">
            {service.summary}
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/8 bg-graphite p-7">
              <h2 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-gold">
                O desafio
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-fog">{service.problem}</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-graphite p-7">
              <h2 className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Resultados esperados
              </h2>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 leading-relaxed text-fog">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-2xl font-bold text-white sm:text-3xl">
              O que entregamos
            </h2>
            <ul className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {service.deliverables.map((d, i) => (
                <li key={d} className="flex gap-5 py-5">
                  <span className="font-mono text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-white">{d}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-mono text-sm font-bold uppercase tracking-[0.18em] text-mist">
              Tecnologias
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <li
                  key={t}
                  className="chip rounded-lg border border-white/10 px-3.5 py-1.5 font-mono text-sm text-fog"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ContactCTA
        title={`Vamos falar sobre ${service.title.toLowerCase()}?`}
        text="Conte o seu cenário e receba uma proposta sob medida para o seu desafio."
      />

      <section className="border-t border-white/5 bg-carbon py-20">
        <Container>
          <h2 className="font-mono text-2xl font-bold text-white">Outras soluções</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
