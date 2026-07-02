"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [wiped, setWiped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [curtainHidden, setCurtainHidden] = useState(false);

  useEffect(() => {
    setWiped(false);
    setVisible(false);
    setCurtainHidden(false);

    let raf2 = 0;
    let hideId = 0;

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setWiped(true);
        setVisible(true);
      });
      hideId = window.setTimeout(() => setCurtainHidden(true), 750);
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(hideId);
    };
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden="true"
        className={`curtain${wiped ? " curtain-wipe" : ""}${curtainHidden ? " curtain-hidden" : ""}`}
      />
      <div
        key={pathname}
        className={`page-fade flex flex-1 flex-col${visible ? " is-visible" : ""}`}
      >
        {children}
      </div>
    </>
  );
}
