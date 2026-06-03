"use client";

import { useEffect } from "react";
import { SECTIONS } from "@/lib/content";
import { useGardenStore } from "@/store/useGardenStore";
import { cn } from "@/lib/utils";

export default function Nav() {
  const activeSection = useGardenStore((s) => s.activeSection);
  const setActiveSection = useGardenStore((s) => s.setActiveSection);

  // Observe sections to drive the active index — no scroll-math, no jank.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-[var(--gutter)] top-1/2 z-50 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col gap-5">
        {SECTIONS.map((s) => {
          const active = activeSection === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active ? "true" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={cn(
                    "font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-300",
                    active
                      ? "text-phosphor opacity-100"
                      : "text-bone-faint opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  )}
                >
                  {s.label}
                </span>
                <span
                  className={cn(
                    "block h-px transition-all duration-300",
                    active
                      ? "w-10 bg-phosphor"
                      : "w-5 bg-bone-faint group-hover:w-8 group-hover:bg-bone-dim"
                  )}
                />
                <span className="sr-only">Go to {s.label} section</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
