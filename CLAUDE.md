@AGENTS.md

# CLAUDE.md

Guia para o Claude Code trabalhar neste repositório: site institucional da **DataFirst, Consultoria em Dados**.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (configuração via `@theme` em `src/app/globals.css`, sem `tailwind.config`)
- Ícones: `lucide-react` (+ ícones de marcas próprios em `src/components/icons.tsx`)
- **Export 100% estático** (`output: "export"`, `trailingSlash: true`, `images.unoptimized` em `next.config.ts`)
- Node **24** (ver `.nvmrc`)

> Esta versão do Next.js tem mudanças incompatíveis com versões antigas. Antes de escrever código que use APIs
> do Next, consulte `node_modules/next/dist/docs/` (ver `AGENTS.md`).

## Comandos

```bash
npm run dev      # servidor de desenvolvimento em http://localhost:3000
npm run build    # gera o site estático em out/
npm run lint     # ESLint (eslint-config-next)
npx serve out    # serve o build estático localmente
```

Não há testes automatizados; valide mudanças com `npm run lint` e `npm run build`.

## Estrutura

```
src/
  app/                  Rotas (App Router): /, /sobre, /solucoes, /solucoes/[slug], /contato, /politicas/*
    layout.tsx          Fontes, metadata global, JSON-LD, Header/Footer
    sitemap.ts, robots.ts
  components/           Header, Footer, Logo, LegalPage, ui.tsx (Container, Button, SectionHeading…),
                        sections.tsx (ServiceCard, ContactCTA, WhatsAppFloat), icons.tsx
  content/site.ts       Fonte única do conteúdo: empresa, contatos, navegação, soluções, valores…
public/brand/           Logos (SVG/PNG) e imagens da marca
docs/brand.md           Guia da identidade visual
```

## Convenções

- **Conteúdo fica em `src/content/site.ts`.** Não espalhe textos, contatos ou dados da empresa pelos
  componentes; adicione-os ali e importe. As páginas de `/solucoes/[slug]` são geradas a partir de `services`.
- Placeholders a preencher estão marcados com `// TODO` em `site.ts` (CNPJ, domínio, WhatsApp, e-mails, redes).
  Não invente valores reais para eles.
- Todo texto visível é em **português do Brasil**.
- Como o export é estático: nada de rotas dinâmicas sem `generateStaticParams`, API routes, Server Actions,
  middleware ou otimização de imagens em runtime. Links internos usam barra final (`/sobre/`).
- Imports com alias `@/` (→ `src/`).

## Identidade visual

Use os tokens do Tailwind definidos em `globals.css` (detalhes em `docs/brand.md`), não hex soltos:

- Cores: `royal` (primária `#003492`, + `royal-100…500`), `gold` (destaque `#E6B759`, + `gold-100/300`),
  neutros `ink` (fundo), `carbon`, `graphite`, `steel`, `mist`, `fog`
- Estética dark mode (fundo preto, pontos de luz, azul royal + dourado)
- Fontes: `font-mono` = Space Mono (títulos), `font-sans` = Satoshi (texto corrido)
- Logos: use os componentes `Logo`/`Symbol` de `src/components/Logo.tsx`

## Políticas

Os textos em `src/app/politicas/*` (Privacidade/LGPD, Segurança, Termos, Cookies) são modelos que ainda
passarão por revisão jurídica; usam o componente `LegalPage`.
