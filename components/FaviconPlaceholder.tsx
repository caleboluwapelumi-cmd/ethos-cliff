interface Props {
  label?: string;
  tone?: "paper" | "ink";
  size?: number;
}

export default function FaviconPlaceholder({ label, tone = "paper", size = 48 }: Props) {
  const markFill = tone === "ink" ? "#f7f2e7" : "#121110";
  const textFill = tone === "ink" ? "#121110" : "#f7f2e7";

  return (
    <div
      className={`favicon-placeholder${tone === "ink" ? " favicon-placeholder--ink" : ""}`}
      aria-hidden="true"
    >
      <div className="favicon-placeholder-mark">
        <svg width={size} height={size} viewBox="0 0 32 32">
          <rect width="32" height="32" rx="4" fill={markFill} />
          <text
            x="16"
            y="21"
            fontFamily="var(--font-display)"
            fontWeight="700"
            fontSize="13"
            fill={textFill}
            textAnchor="middle"
          >
            EC
          </text>
        </svg>
      </div>
      {label && <span className="favicon-placeholder-label eyebrow">{label}</span>}
    </div>
  );
}
