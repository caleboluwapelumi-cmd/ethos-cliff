interface Props {
  color?: string;
  size?: number;
  opacity?: number;
  className?: string;
}

const RING_COUNT = 10;
const BASE_RADIUS = 50;
const RADIUS_STEP = 28;
const RING_TILT = "rotate(15 400 400)";

export default function FingerprintMark({
  color = "#0A0A0A",
  size = 32,
  opacity = 1,
  className,
}: Props) {
  const strokeWidth = (1.5 * 800) / size;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="none"
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      <g transform={RING_TILT}>
        {Array.from({ length: RING_COUNT }, (_, i) => {
          const rx = BASE_RADIUS + i * RADIUS_STEP;
          const ry = rx * 1.15;
          return (
            <ellipse
              key={i}
              cx="400"
              cy="400"
              rx={rx}
              ry={ry}
              stroke={color}
              strokeWidth={strokeWidth}
            />
          );
        })}
      </g>
    </svg>
  );
}
