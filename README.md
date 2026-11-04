# Site DataFirst

Site institucional da **DataFirst, Consultoria em Dados**. Feito com Next.js 16 (App Router), Tailwind CSS v4 e
export 100% estático.

## Rodando localmente

Requer **Node 24** (há um `.nvmrc`; na Vercel a versão vem de `engines` no `package.json`):

```bash
nvm use          # usa o Node 24
npm install
npm run dev      # http://localhost:3000
```

## Publicando

```bash
npm run build    # gera a pasta out/ com o site estático
```

A pasta `out/` pode ser publicada em qualquer hospedagem estática:
- **Vercel / Netlify:** conecte o repositório. O build é detectado automaticamente (na Vercel, mantenha o
  preset Next.js sem alterar Build Command/Output Directory).
- **GitHub Pages, Cloudflare Pages, S3, Hostinger etc.:** envie o conteúdo de `out/`.

## Editando o conteúdo

Quase todo o texto do site está em **`src/content/site.ts`**: dados da empresa, contatos, soluções, missão,
visão, valores, diferenciais e etapas do processo. As políticas ficam em `src/app/politicas/*/page.tsx`.

### ⚠️ Placeholders a preencher antes de publicar (`src/content/site.ts`)

| Campo | Valor atual |
|---|---|
| `contact.linkedin` / `instagram` / `instagramHandle` | URLs genéricas |

Busque por `TODO` no arquivo para encontrar todos.

> Os textos das políticas (Privacidade/LGPD, Segurança, Termos, Cookies) são **modelos** e devem passar por
> revisão jurídica.

## Estrutura

```
src/
  app/
    page.tsx                 Início
    sobre/                   Missão, visão, valores, conceito da marca
    solucoes/                Lista de soluções
    solucoes/[slug]/         Página de cada solução (gerada a partir de site.ts)
    contato/                 WhatsApp, e-mail, LinkedIn, Instagram
    politicas/               Privacidade, Segurança, Termos, Cookies
    sitemap.ts, robots.ts    SEO
    icon.png, apple-icon.png, favicon.ico, opengraph-image.png
    fonts/                   Satoshi (woff2)
  components/                Header, Footer, Logo, UI e seções compartilhadas
  content/site.ts            Conteúdo editável
public/brand/                Logos e imagens da marca
docs/brand.md                Guia da identidade visual
```
