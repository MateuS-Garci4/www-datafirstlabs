"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, whatsappUrl } from "@/content/site";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // O menu fica aberto apenas na rota onde foi aberto, então fecha sozinho ao navegar.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-white/5 bg-ink"
          : scrolled
            ? "border-b border-white/5 bg-ink/80 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="DataFirst, página inicial" className="py-2">
          <Logo size={30} />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="rounded-lg px-4 py-2 text-[15px] font-medium text-fog transition-colors hover:text-white aria-[current=page]:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-gold-300"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="border-t border-white/5 px-5 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpenOn(null)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block border-b border-white/5 py-4 font-mono text-lg text-white aria-[current=page]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-xl bg-gold px-5 py-3.5 text-center font-bold text-ink"
          >
            Fale conosco no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
