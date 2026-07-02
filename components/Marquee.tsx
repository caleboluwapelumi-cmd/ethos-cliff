interface MarqueeProps {
  items: string[];
}

const textStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.85rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--ec-ink-faint)",
};

export default function Marquee({ items }: MarqueeProps) {
  const content = items.join(" · ") + " · ";

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track py-5">
        <span className="whitespace-nowrap pr-8" style={textStyle}>
          {content}
        </span>
        <span className="whitespace-nowrap pr-8" style={textStyle}>
          {content}
        </span>
      </div>
    </div>
  );
}
