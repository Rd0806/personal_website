"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { PROFILE } from "@/lib/content";

export default function Monolith() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="monolith"
      aria-labelledby="monolith-title"
      className="relative flex min-h-[100svh] flex-col justify-between px-[var(--gutter)] pb-16 pt-24"
    >
      {/* Localized scrim — guarantees text contrast over the 3D field. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background:
            "radial-gradient(120% 90% at 18% 60%, rgba(11,11,12,0.86) 0%, rgba(11,11,12,0.5) 45%, rgba(11,11,12,0) 78%)",
        }}
      />

      {/* Minimalist header */}
      <motion.header
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 border-b border-hairline pb-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.28em] text-bone-dim"
        >
          <span className="text-phosphor">●</span> {PROFILE.location}
        </motion.p>
        <motion.ul
          variants={item}
          className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-bone-dim"
        >
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-phosphor"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-phosphor"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-phosphor"
            >
              LinkedIn ↗
            </a>
          </li>
        </motion.ul>
      </motion.header>

      {/* Declarative title block */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-1 flex-col justify-center py-12"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-bone-dim"
        >
          Portfolio / 2026
        </motion.p>

        <h1 id="monolith-title" className="font-display leading-[0.86]">
          <motion.span
            variants={item}
            className="block text-[clamp(3.5rem,13vw,12rem)] font-light tracking-[-0.03em] text-bone"
          >
            Rudra
          </motion.span>
          <motion.span
            variants={item}
            className="block text-[clamp(3.5rem,13vw,12rem)] font-light italic tracking-[-0.03em] text-bone"
          >
            Desai
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl font-mono text-sm uppercase leading-relaxed tracking-[0.12em] text-bone-dim sm:text-base"
        >
          <span className="text-phosphor">// </span>
          AI Research &amp; Full-Stack Architecture
        </motion.p>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-[0.95rem] leading-relaxed text-bone-dim"
        >
          Computer Science at{" "}
          <span className="text-bone">Georgia Tech</span>. Specializing in{" "}
          <span className="text-bone">LLM interpretability</span>,{" "}
          <span className="text-bone">scalable system design</span>, and
          building{" "}
          <span className="text-bone">accessible digital infrastructure</span>.
        </motion.p>
      </motion.div>

      {/* Scroll cue — a coordinate marker, not a generic bouncing chevron */}
      <motion.a
        href="#latent-spaces"
        variants={item}
        initial="hidden"
        animate="show"
        className="group flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-phosphor"
      >
        <span className="border-b border-hairline pb-1 group-hover:border-phosphor">
          Enter the index
        </span>
        <ArrowDownRight
          size={15}
          className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}
