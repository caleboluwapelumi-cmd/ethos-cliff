import Image from "next/image";

interface Props {
  size?: "sm" | "lg";
  tone?: "ink" | "on-ink";
  color?: string;
  showMark?: boolean;
}

const LOGO_ASPECT = 1600 / 541;

export default function WordMark({
  size = "sm",
  tone = "ink",
  color,
  showMark = false,
}: Props) {
  const headline = size === "lg" ? "1.5rem" : "1.1rem";
  const toneHeadlineColor = tone === "ink" ? "var(--ec-ink)" : "var(--ec-on-ink)";
  const toneBylineColor = tone === "ink" ? "var(--ec-ink-faint)" : "var(--ec-on-ink-soft)";
  const headlineColor = color ?? toneHeadlineColor;
  const bylineColor = color ?? toneBylineColor;

  const dividerColor = color ?? headlineColor;
  const divider = (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 1,
        height: `calc(${headline} * 0.6)`,
        margin: "0 0.75rem",
        background: dividerColor,
        opacity: 0.3,
      }}
    />
  );

  if (showMark) {
    const logoHeight = size === "lg" ? 40 : 36;
    const logoWidth = Math.round(logoHeight * LOGO_ASPECT);

    return (
      <span className="flex items-center leading-none">
        <Image
          src="/images/logo-mark.png"
          alt="Ethos Cliff"
          height={logoHeight}
          width={logoWidth}
          priority
          style={{
            height: logoHeight,
            width: "auto",
            filter: tone === "on-ink" ? "invert(1)" : "none",
          }}
        />
        {divider}
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: `calc(${headline} * 0.7)`,
            fontWeight: 400,
            color: bylineColor,
            opacity: 0.6,
          }}
        >
          by The-Olu Bamigboye
        </span>
      </span>
    );
  }

  return (
    <span className="flex items-center leading-none">
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: headline,
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: headlineColor,
          textTransform: "uppercase",
        }}
      >
        Ethos Cliff
      </span>
      {divider}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: `calc(${headline} * 0.7)`,
          fontWeight: 400,
          color: bylineColor,
          opacity: 0.6,
        }}
      >
        by The-Olu Bamigboye
      </span>
    </span>
  );
}
