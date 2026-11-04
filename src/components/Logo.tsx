import type { CSSProperties } from "react";

/* Símbolo DataFirst reconstruído em vetor a partir do grid da marca.
   As formas são desenhadas no grid a 45° e giradas para a posição final. */
export function Symbol({
  className,
  style,
  fill = "var(--color-gold)",
  title,
}: {
  className?: string;
  style?: CSSProperties;
  fill?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="-160.9 11.6 285.8 339.5"
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g transform="rotate(45)" fill={fill}>
        <rect width="192" height="86" rx="28" />
        <path d="M76 116H281A28 28 0 0 1 309 144V176A28 28 0 0 1 281 204H154A20 20 0 0 0 134 224V264A28 28 0 0 1 106 292H76A28 28 0 0 1 48 264V144A28 28 0 0 1 76 116Z" />
      </g>
    </svg>
  );
}

/** Logo horizontal: símbolo + wordmark. `size` = altura do símbolo em px. */
export function Logo({
  size = 32,
  tone = "white",
}: {
  size?: number;
  tone?: "white" | "blue" | "black";
}) {
  return (
    <span className="inline-flex items-center" style={{ gap: size * 0.5 }}>
      <Symbol
        fill={tone === "black" ? "#000" : "var(--color-gold)"}
        className="shrink-0"
        style={{ height: size, width: size * 0.842 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/brand/wordmark-${tone}.png`}
        alt="DataFirst"
        width={791}
        height={91}
        style={{ height: size * 0.526, width: "auto" }}
      />
    </span>
  );
}
