interface Props {
  text: string;
  className?: string;
}

export default function RotatingBadge({ text, className = "" }: Props) {
  const label = `${text} • `;
  const repeated = label.repeat(3);

  return (
    <div className={`rotating-badge ${className}`} aria-hidden="true">
      <svg width="104" height="104" viewBox="0 0 104 104">
        <defs>
          <path id="badge-circle" d="M52,52 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text
          fontFamily="var(--font-sans)"
          fontSize="8.6"
          letterSpacing="1.5"
          fill="var(--ec-ink-soft)"
        >
          <textPath href="#badge-circle" startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <div className="rotating-badge-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="var(--ec-red)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
