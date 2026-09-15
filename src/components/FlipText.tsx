"use client";

import { useMemo, type CSSProperties } from "react";
import styles from "./flip-text.module.css";

type FlipTextProps = {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
};

type FlipStyle = CSSProperties & {
  "--flip-duration"?: string;
  "--flip-delay"?: string;
};

export function FlipText({ children, className, duration = 450, delay = 0, stagger = 22 }: FlipTextProps) {
  const characters = useMemo(() => children.split(""), [children]);

  return (
    <span
      aria-label={children}
      className={`${styles.root}${className ? ` ${className}` : ""}`}
      style={{ "--flip-duration": `${duration}ms` } as FlipStyle}
    >
      {characters.map((character, index) => {
        const isSpace = character === " ";
        return (
          <span
            aria-hidden="true"
            className={`${styles.char}${isSpace ? ` ${styles.space}` : ""}`}
            key={`${character}-${index}`}
            style={{ "--flip-delay": `${delay + index * stagger}ms` } as FlipStyle}
          >
            <span className={styles.charInner}>
              <span className={styles.charFace}>{isSpace ? "\u00a0" : character}</span>
              <span className={styles.charFaceNext}>{isSpace ? "\u00a0" : character}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
