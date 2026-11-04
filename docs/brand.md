# DataFirst: guia rápido da identidade visual

Extraído de `docs/apresentacao-datafirst.pdf` (apresentação da marca).

## Conceito
Consultoria estratégica que converte dados complexos em clareza operacional e decisões de alta precisão.
Estética **dark mode** com pontos de luz focais, tipografia monospaced e a combinação
**azul royal + dourado** (autoridade institucional + inovação).

- **Slogan:** "Transformamos dados brutos em inteligência estratégica."
- **Pilares:** Tecnologia · Autoridade · Inovação · Estratégia · Precisão · Insights
- **Símbolo:** funde o caractere "F" ao conceito de "1st" (primeiro), de forma não literal.

## Cores

| Token (Tailwind) | Hex | Uso |
|---|---|---|
| `royal` | `#003492` | Primária: segurança, inteligência, tecnologia |
| `royal-500` | `#5076B9` | Tons de apoio |
| `royal-300` | `#86A2D4` | |
| `royal-200` | `#BED1EF` | |
| `royal-100` | `#DEEBFF` | |
| `gold` | `#E6B759` | Destaque: o "ouro" extraído dos dados |
| `gold-300` | `#F3D69B` | |
| `gold-100` | `#FFF2D9` | |
| `ink` | `#000000` | Fundo principal |
| `graphite` | `#1A1A1A` | Superfícies |
| `steel` | `#494949` | Neutro escuro |
| `mist` | `#9B9B9B` | Texto secundário |

Os tokens estão definidos em `src/app/globals.css` (`@theme`).

## Tipografia
- **Space Mono** (títulos), via Google Fonts (`next/font/google`)
- **Satoshi** (texto corrido, pesos 300–900), da Fontshare, em `src/app/fonts/` (licença gratuita ITF FFL)

## Logo: arquivos em `public/brand/`
- `symbol.svg`, `symbol-white.svg`, `symbol-blue.svg`: símbolo em **vetor**, reconstruído a partir do grid da marca
- `wordmark-white.png`, `wordmark-blue.png`, `wordmark-black.png`: wordmark "DATAFIRST" em PNG transparente (791×91), recortado da apresentação
- Variações aprovadas: fundo azul (wordmark branco), fundo dourado (tudo preto), fundo preto (wordmark branco) e fundo branco (wordmark azul). O símbolo é dourado em todas, exceto no fundo dourado.
- Favicon: tile dourado com símbolo preto. Ícone de app: tile azul com símbolo branco.

> Recomendado: substituir os PNGs do wordmark pelo **SVG original** exportado do Illustrator/Figma.
