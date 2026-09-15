"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@data/site";
import { FlipText } from "./FlipText";
import { ScrollToTop } from "./ScrollToTop";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const darkSections = document.querySelectorAll<HTMLElement>("[data-header-theme='dark']");

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const headerProbe = 32;

      setHidden(currentScrollY > 180 && scrollingDown);
      setDark(Array.from(darkSections).some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= headerProbe && bounds.bottom > headerProbe;
      }));
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${hidden ? " site-header--hidden" : ""}${dark ? " site-header--dark" : ""}`}>
      <ScrollToTop className="monogram" label={site.shortName} suffix="." ariaLabel={`${site.name}, back to top`} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {site.nav.map((item) => <a key={item.href} href={item.href}><FlipText>{item.label}</FlipText></a>)}
      </nav>
      <a className="header-contact" href={`mailto:${site.email}`}><FlipText>Let&apos;s talk</FlipText> <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {site.nav.map((item) => <a key={item.href} href={item.href}><FlipText>{item.label}</FlipText></a>)}
        </nav>
      </details>
    </header>
  );
}
