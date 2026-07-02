"use client";

import { useEffect, useState } from "react";

interface Props {
  color?: string;
}

export default function LiveClock({ color = "var(--ec-ink-faint)" }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(t);
    };

    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span
      className="font-sans text-sm tabular-nums"
      style={{ color }}
    >
      Lagos, NG &middot; {time}
    </span>
  );
}
