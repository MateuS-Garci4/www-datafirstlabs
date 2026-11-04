import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { company, contact, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a DataFirst pelo WhatsApp, e-mail ou LinkedIn e conte o seu desafio de dados.",
};

const channels = [
  {
    Icon: WhatsAppIcon,
    title: "WhatsApp",
    value: contact.phoneDisplay,
    cta: "Iniciar conversa",
    href: whatsappUrl(),
    highlight: true,
  },
  {
    Icon: Mail,
    title: "E-mail",
    value: contact.email,
    cta: "Enviar e-mail",
    href: `mailto:${contact.email}?subject=${encodeURIComponent("Contato pelo site")}`,
  },
  {
    Icon: LinkedInIcon,
    title: "LinkedIn",
    value: "DataFirst",
    cta: "Seguir no LinkedIn",
    href: contact.linkedin,
  },
  {
    Icon: InstagramIcon,
    title: "Instagram",
    value: contact.instagramHandle,
    cta: "Ver perfil",
    href: contact.instagram,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Vamos conversar sobre os <span className="text-gold">seus dados.</span>
          </>
        }
        lead="Escolha o canal que preferir. Respondemos rapidamente em horário comercial."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            {channels.map(({ Icon, title, value, cta, href, highlight }) => (
              <li key={title}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col rounded-3xl border p-8 transition-colors ${
                    highlight
                      ? "border-gold/40 bg-gold/[0.07] hover:border-gold"
                      : "chip border-white/8 hover:border-gold/40"
                  }`}
                >
                  <span
                    className={`grid size-12 place-items-center rounded-xl ${
                      highlight ? "bg-gold text-ink" : "bg-royal text-white"
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-6 font-mono text-sm font-bold uppercase tracking-[0.18em] text-mist">
                    {title}
                  </h2>
                  <p className="mt-2 break-all font-mono text-xl text-white sm:text-2xl">{value}</p>
                  <span className="mt-6 text-[15px] font-bold text-gold group-hover:underline">
                    {cta} →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-white/8 bg-graphite p-8">
              <MapPin aria-hidden className="mt-0.5 size-6 shrink-0 text-gold" />
              <div>
                <h2 className="font-mono font-bold text-white">Onde estamos</h2>
                <p className="mt-2 text-mist">
                  {company.city}
                  <br />
                  {company.serviceArea}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-white/8 bg-graphite p-8">
              <Clock aria-hidden className="mt-0.5 size-6 shrink-0 text-gold" />
              <div>
                <h2 className="font-mono font-bold text-white">Horário de atendimento</h2>
                <p className="mt-2 text-mist">{company.hours}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
