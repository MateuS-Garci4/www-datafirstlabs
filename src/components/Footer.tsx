import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { company, contact, nav, services, whatsappUrl } from "@/content/site";

const legal = [
  { href: "/politicas/privacidade/", label: "Política de Privacidade" },
  { href: "/politicas/seguranca/", label: "Segurança e Confidencialidade" },
  { href: "/politicas/termos/", label: "Termos de Uso" },
  { href: "/politicas/cookies/", label: "Política de Cookies" },
];

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white">
      {children}
    </h2>
  );
}

const linkCls = "text-mist transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-graphite">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <Logo size={30} />
          <p className="mt-6 max-w-xs font-mono text-sm leading-relaxed text-fog">
            {company.slogan}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: whatsappUrl(), label: "WhatsApp", Icon: WhatsAppIcon },
              { href: contact.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="chip grid size-10 place-items-center rounded-lg border border-white/10 text-fog transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <FooterTitle>Navegação</FooterTitle>
          <ul className="space-y-2.5 text-[15px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkCls}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Soluções</FooterTitle>
          <ul className="space-y-2.5 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/solucoes/${s.slug}/`} className={linkCls}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterTitle>Contato</FooterTitle>
          <ul className="space-y-2.5 text-[15px]">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className={`${linkCls} inline-flex items-center gap-2`}>
                <Mail aria-hidden className="size-4" />
                {contact.email}
              </a>
            </li>
            <li className="text-mist">{company.city}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col gap-4 py-6 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} · CNPJ {company.cnpj}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
