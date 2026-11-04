import Image from "next/image";
import { Check } from "lucide-react";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { ContactCTA, ServiceCard } from "@/components/sections";
import { about, differentials, process, services } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="aurora grain relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 -z-10 w-full opacity-40 md:w-[55%] md:opacity-100"
        >
          <Image
            src="/brand/glass.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-left [mask-image:linear-gradient(to_right,transparent,black_35%)] mix-blend-screen"
          />
        </div>
        <Container className="relative flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
          <Eyebrow>Consultoria de Dados</Eyebrow>
          <h1 className="max-w-3xl font-mono text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Transformamos dados brutos em{" "}
            <span className="text-gold">inteligência estratégica.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Análise, engenharia, automação e governança de dados para que sua
            empresa decida com clareza e precisão, não por intuição.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/solucoes/" arrow>
              Conheça as soluções
            </Button>
            <Button href="/contato/" variant="outline">
              Fale com um especialista
            </Button>
          </div>
        </Container>
      </section>

      {/* VALORES / PALAVRAS-CHAVE DA MARCA */}
      <section aria-label="Nossos pilares" className="border-y border-white/5 bg-ink py-10">
        <Container>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {about.values.map((v) => (
              <li
                key={v.title}
                className="chip rounded-lg border border-white/8 px-4 py-3 text-center text-[15px] font-medium text-white"
              >
                {v.title}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SOBRE (RESUMO) */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title={
                <>
                  Dados em <span className="text-gold">primeiro lugar.</span>
                </>
              }
              lead={about.intro}
            />
            <div className="mt-9">
              <Button href="/sobre/" variant="outline" arrow>
                Conheça a DataFirst
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["servers", "chip", "buildings"].map((img, i) => (
              <div
                key={img}
                className={`relative aspect-[3/5] overflow-hidden rounded-2xl border border-white/10 ${
                  i === 1 ? "translate-y-8" : ""
                }`}
              >
                <Image
                  src={`/brand/${img}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUÇÕES */}
      <section className="border-t border-white/5 bg-carbon py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Soluções"
              title="Da coleta ao insight, ponta a ponta."
              lead="Atuamos em toda a jornada dos dados, com soluções que se conectam e evoluem com o seu negócio."
            />
            <Button href="/solucoes/" variant="ghost" arrow className="px-0">
              Ver todas as soluções
            </Button>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Método claro, entregas contínuas."
            lead="Projetos guiados por objetivos de negócio, com ciclos curtos e resultados visíveis desde as primeiras semanas."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="relative rounded-2xl border border-white/8 bg-graphite p-7">
                <span className="font-mono text-4xl font-bold text-gold">{p.step}</span>
                <h3 className="mt-5 font-mono text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* DIFERENCIAIS */}
      <section className="aurora-soft grain relative overflow-hidden border-y border-white/5 py-24 sm:py-32">
        <Container className="relative z-10 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="Por que a DataFirst"
            title="Rigor técnico com visão de negócio."
            lead="Combinamos a profundidade de quem domina a estrutura técnica dos dados com a postura consultiva de quem entende de estratégia."
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {differentials.map((d) => (
              <li key={d.title} className="chip rounded-2xl border border-white/8 p-6">
                <span className="mb-4 grid size-9 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check aria-hidden className="size-5" />
                </span>
                <h3 className="font-mono font-bold text-white">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{d.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
