"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";

function getInteractionTarget(element: HTMLAnchorElement | HTMLButtonElement) {
  if (element instanceof HTMLButtonElement) return "button";

  const href = element.getAttribute("href") ?? "link";
  if (href.startsWith("#")) return `section:${href}`;
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";

  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin ? url.pathname : url.hostname;
  } catch {
    return "link";
  }
}

export function SiteAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const interactive = event.target.closest<HTMLAnchorElement | HTMLButtonElement>("a, button");
      if (!interactive || interactive.dataset.analyticsIgnore === "true") return;

      const nestedLabel = interactive.querySelector<HTMLElement>("[aria-label]")?.getAttribute("aria-label");
      const label = interactive.getAttribute("aria-label") ?? nestedLabel ?? interactive.textContent?.trim();
      if (!label) return;

      track("Interaction", {
        label: label.replace(/\s+/g, " ").slice(0, 120),
        target: getInteractionTarget(interactive),
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return <Analytics />;
}
