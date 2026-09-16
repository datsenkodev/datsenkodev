"use client";

import type { ReactNode } from "react";
import { FlipText } from "./FlipText";

type ScrollToTopProps = {
  label: string;
  className?: string;
  ariaLabel?: string;
  suffix?: ReactNode;
};

export function ScrollToTop({ label, className, ariaLabel, suffix }: ScrollToTopProps) {
  const handleClick = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button type="button" className={className} aria-label={ariaLabel ?? label} onClick={handleClick}>
      <FlipText>{label}</FlipText>
      {suffix && <span aria-hidden="true">{suffix}</span>}
    </button>
  );
}
