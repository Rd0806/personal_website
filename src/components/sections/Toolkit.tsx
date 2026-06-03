"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { REGISTERS, PROFILE } from "@/lib/content";

export default function Toolkit() {
  const reduce = useReducedMotion();

  const col: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: reduce ? 0 : i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-title"
      className="relative px-[var(--gutter)] py-28"
    >
      <header className="mb-12 flex flex-col gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
            03 — Parameters
          </p>
          <h2
            id="toolkit-title"
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-none tracking-[-0.02em] text-bone"
          >
            Technical Toolkit
          </h2>
        </div>
        <dl className="flex gap-8 font-mono text-xs uppercase tracking-[0.1em] text-bone-dim">
          <div className="flex flex-col gap-1">
            <dt className="text-bone-faint">Status</dt>
            <dd className="text-phosphor">● Online</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-bone-faint">Build</dt>
            <dd className="text-bone">v2.0</dd>
          </div>
        </dl>
      </header>

      <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
        {REGISTERS.map((reg, i) => (
          <motion.div
            key={reg.id}
            custom={i}
            variants={col}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col bg-obsidian p-7 sm:p-9"
          >
            <div className="mb-7 flex items-baseline justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-phosphor">
                {reg.label}
              </h3>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-bone-faint">
                {reg.caption}
              </span>
            </div>

            <ul className="flex flex-col">
              {reg.items.map((item, j) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-t border-hairline py-3.5 first:border-t-0"
                >
                  <span className="font-mono text-[0.65rem] text-bone-faint">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[0.95rem] leading-snug text-bone">
                    {item}
                  </span>
                  <span
                    className="mt-1 h-1 w-1 shrink-0 rounded-full bg-phosphor-deep"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Closing call-to-action — editorial, not a button-soup CTA. */}
      <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md font-display text-2xl font-light italic leading-snug text-bone">
          Building structure where there was entropy.
        </p>
        <a
          href={`mailto:${PROFILE.email}`}
          className="group w-fit font-mono text-xs uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-phosphor"
        >
          <span className="border-b border-hairline pb-1 group-hover:border-phosphor">
            Start a conversation ↗
          </span>
        </a>
      </div>
    </section>
  );
}
