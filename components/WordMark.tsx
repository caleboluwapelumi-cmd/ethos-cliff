import FingerprintMark from "@/components/FingerprintMark";

interface Props {
  size?: "sm" | "lg";
  tone?: "ink" | "on-ink";
  color?: string;
  showMark?: boolean;
}

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
  const markSize = size === "lg" ? 40 : 32;

  return (
    <span className="flex items-center gap-2">
      {showMark && <FingerprintMark color={headlineColor} size={markSize} />}
      <span className="flex flex-col gap-[2px] leading-none">
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
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: `calc(${headline} * 0.65)`,
            fontWeight: 400,
            color: bylineColor,
          }}
        >
          by The-Olu Bamigboye
        </span>
      </span>
    </span>
  );
}
