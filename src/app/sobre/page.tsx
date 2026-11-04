import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye } from "lucide-react";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { ContactCTA } from "@/components/sections";
import { Symbol } from "@/components/Logo";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a DataFirst: missão, visão e valores de uma consultoria que coloca os dados em primeiro lugar.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Uma consultoria que coloca os <span className="text-gold">dados em primeiro lugar.</span>
          </>
        }
        lead={about.intro}
      />

      {/* MISSÃO & VISÃO */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-5 md:grid-cols-2">
          {[
            { Icon: Compass, title: "Missão", text: about.mission },
            { Icon: Eye, title: "Visão", text: about.vision },
          ].map(({ Icon, title, text }) => (
            <article
              key={title}
              className="chip rounded-3xl border border-white/8 p-8 sm:p-10"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-royal text-white">
                <Icon aria-hidden className="size-6" />
              </span>
              <h2 className="mt-7 font-mono text-2xl font-bold text-white">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-fog">{text}</p>
            </article>
          ))}
        </Container>
      </section>

      {/* VALORES */}
      <section className="border-y border-white/5 bg-carbon py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Valores"
            title="O que nos guia em cada projeto."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v, i) => (
              <li key={v.title} className="rounded-2xl border border-white/8 bg-graphite p-7">
                <span className="font-mono text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-mono text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CONCEITO DA MARCA */}
      <section className="py-24 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#02040b]">
            <Image
              src="/brand/glass.webp"
              alt="Símbolo da DataFirst em vidro azul"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Nossa marca" title="Prioridade e análise." />
            <p className="mt-5 text-lg leading-relaxed text-mist">{about.symbol}</p>
            <div className="mt-10 flex items-center gap-6">
              <span className="grid size-20 place-items-center rounded-2xl bg-royal">
                <Symbol fill="#fff" className="h-10" />
              </span>
              <span className="grid size-20 place-items-center rounded-2xl bg-gold">
                <Symbol fill="#000" className="h-10" />
              </span>
              <span className="grid size-20 place-items-center rounded-2xl bg-white">
                <Symbol fill="#494949" className="h-10" />
              </span>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
