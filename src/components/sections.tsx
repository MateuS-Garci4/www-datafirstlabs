import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Symbol } from "./Logo";
import { Button, Container } from "./ui";
import { ServiceIcon, WhatsAppIcon } from "./icons";
import { contact, whatsappUrl, type Service } from "@/content/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/solucoes/${service.slug}/`}
      className="chip group relative flex flex-col rounded-2xl border border-white/8 p-7 transition-colors hover:border-gold/40"
    >
      <div className="mb-6 flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-royal/40 text-royal-200 ring-1 ring-royal-500/40 transition-colors group-hover:bg-gold group-hover:text-ink group-hover:ring-gold">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <ArrowUpRight
          aria-hidden
          className="size-5 text-steel transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
        />
      </div>
      <h3 className="font-mono text-lg font-bold text-white">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-mist">{service.short}</p>
    </Link>
  );
}

/** Faixa de chamada para contato, usada no fim das páginas. */
export function ContactCTA({
  title = "Vamos colocar seus dados em primeiro lugar?",
  text = "Conte o seu desafio. Em uma conversa rápida, entendemos o cenário e indicamos o melhor caminho, sem compromisso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="aurora grain relative overflow-hidden rounded-3xl border border-white/10 px-7 py-14 sm:px-14 sm:py-20">
          <Symbol
            fill="rgb(255 255 255 / 0.06)"
            className="pointer-events-none absolute -top-10 -right-10 h-[130%] w-auto"
          />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-mono text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()} external>
                <WhatsAppIcon className="size-5" />
                Conversar no WhatsApp
              </Button>
              <Button href={`mailto:${contact.email}`} variant="outline" external>
                Enviar e-mail
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgb(0_0_0/0.6)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
