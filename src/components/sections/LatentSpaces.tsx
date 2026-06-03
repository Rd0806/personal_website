"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Plus } from "lucide-react";
import { ENTRIES } from "@/lib/content";
import { useGardenStore } from "@/store/useGardenStore";
import { cn } from "@/lib/utils";

export default function LatentSpaces() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();
  const setActiveIndex = useGardenStore((s) => s.setActiveIndex);

  // The open row drives the emphasized layer in the garden.
  useEffect(() => {
    setActiveIndex(open);
    return () => setActiveIndex(null);
  }, [open, setActiveIndex]);

  return (
    <section
      id="latent-spaces"
      aria-labelledby="latent-title"
      className="relative px-[var(--gutter)] py-28"
    >
      <header className="mb-14 flex flex-col gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
            02 — Index
          </p>
          <h2
            id="latent-title"
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-none tracking-[-0.02em] text-bone"
          >
            Latent Spaces
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs leading-relaxed tracking-[0.05em] text-bone-dim">
          An active research &amp; engineering index. Select a record to expand
          its trace.
        </p>
      </header>

      <ul className="border-t border-hairline">
        {ENTRIES.map((entry, i) => {
          const isOpen = open === i;
          return (
            <li key={entry.index} className="border-b border-hairline">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(open)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(open)}
                  aria-expanded={isOpen}
                  aria-controls={`record-${entry.index}`}
                  className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 text-left sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-9"
                >
                  {/* Index + status */}
                  <span className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-bone-faint">
                      [{entry.index}]
                    </span>
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        entry.status === "active"
                          ? "bg-phosphor shadow-[0_0_8px_var(--color-phosphor)]"
                          : "bg-bone-faint"
                      )}
                      aria-hidden="true"
                    />
                  </span>

                  {/* Role + org */}
                  <span className="flex flex-col gap-1.5">
                    <span
                      className={cn(
                        "font-display text-[clamp(1.5rem,3.5vw,2.6rem)] font-light leading-[1.02] tracking-[-0.01em] transition-colors duration-300",
                        isOpen
                          ? "text-phosphor"
                          : "text-bone group-hover:text-phosphor group-focus-visible:text-phosphor"
                      )}
                    >
                      {entry.role}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-bone-dim">
                      {entry.org} · {entry.unit}
                    </span>
                  </span>

                  {/* Period + toggle glyph */}
                  <span className="flex items-center gap-5">
                    <span className="hidden font-mono text-xs uppercase tracking-[0.1em] text-bone-dim sm:inline">
                      {entry.period}
                    </span>
                    <Plus
                      size={20}
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-bone-dim transition-transform duration-300",
                        isOpen && "rotate-45 text-phosphor"
                      )}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`record-${entry.index}`}
                    role="region"
                    aria-label={`${entry.role} details`}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:pl-0 md:grid-cols-[4rem_minmax(0,28rem)_1fr]">
                      <span className="hidden sm:block" />
                      <p className="max-w-prose text-[0.95rem] leading-relaxed text-bone">
                        {entry.abstract}
                      </p>
                      <ul className="flex flex-col gap-3 border-l border-hairline pl-6">
                        {entry.signals.map((s, j) => (
                          <li
                            key={j}
                            className="flex gap-3 font-mono text-xs leading-relaxed tracking-[0.03em] text-bone-dim"
                          >
                            <span className="text-phosphor">{`>`}</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
