import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/sections";
import { company, contact, services } from "@/content/site";
import "./globals.css";

// Títulos: Space Mono (fonte da identidade visual)
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Texto corrido: Satoshi (Fontshare, licença gratuita para uso comercial)
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-300.woff2", weight: "300" },
    { path: "./fonts/Satoshi-400.woff2", weight: "400" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700" },
    { path: "./fonts/Satoshi-900.woff2", weight: "900" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Consultoria em Dados, Engenharia e Automação`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "consultoria de dados",
    "engenharia de dados",
    "business intelligence",
    "power bi",
    "automação de processos",
    "governança de dados",
    "LGPD",
    "machine learning",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: company.name,
    title: `${company.name} | ${company.slogan}`,
    description: company.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  legalName: company.legalName,
  description: company.description,
  slogan: company.slogan,
  url: company.url,
  logo: `${company.url}/brand/symbol.svg`,
  email: contact.email,
  telephone: `+${contact.whatsapp}`,
  areaServed: "BR",
  sameAs: [contact.linkedin, contact.instagram],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.summary },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceMono.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-lg bg-gold px-4 py-2 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
