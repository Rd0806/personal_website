/**
 * content.ts
 * ----------------------------------------------------------------------------
 * Single source of truth for the portfolio. Keeping copy out of components lets
 * the 3D layer and 2D layer stay in sync and makes the site trivially editable.
 */

export const PROFILE = {
  name: "Rudra Desai",
  role: "AI Research & Full-Stack Architecture",
  location: "Atlanta, GA",
  email: "rudradesai0806@gmail.com",
  github: "https://github.com/Rd0806",
  githubHandle: "Rd0806",
  linkedin: "https://www.linkedin.com/in/rudradesai08/",
  linkedinHandle: "in/rudradesai08",
  resume: "/Resume.pdf",
  intro:
    "Computer Science at Georgia Tech. Specializing in LLM interpretability, scalable system design, and building accessible digital infrastructure.",
} as const;

export type Entry = {
  index: string;
  role: string;
  org: string;
  unit: string;
  period: string;
  status: "active" | "archived";
  abstract: string;
  signals: string[];
};

/** Section 02 — "Latent Spaces": experience as a research index / terminal database. */
export const ENTRIES: Entry[] = [
  {
    index: "00",
    role: "Research Assistant",
    org: "Georgia Institute of Technology",
    unit: "School of Electrical & Computer Engineering",
    period: "Present",
    status: "active",
    abstract:
      "Probing the internal representations of transformer models to decode monosemantic concepts — turning dense, entangled activations into interpretable structure.",
    signals: [
      "LLM interpretability — isolating monosemantic features inside transformer layers",
      "Sparse Autoencoder (SAE) benchmarks for representation quality",
      "Layer-wise probing pipelines for decoding latent concepts",
    ],
  },
  {
    index: "01",
    role: "Web Developer & Architect",
    org: "Penn State, School of Engineering Design",
    unit: "López-Uribe Lab",
    period: "Archived",
    status: "archived",
    abstract:
      "Led a complete architectural overhaul of a 100+ page legacy research site, migrating to a high-performance framework with accessibility treated as a hard requirement, not a finishing touch.",
    signals: [
      "Re-architected 100+ legacy pages onto a modern, performant framework",
      "Enforced 100% WCAG-compliant accessibility across the system",
      "Designed user-centric information architecture from the ground up",
    ],
  },
  {
    index: "02",
    role: "Scaling Knowledge Architecture",
    org: "Learning Assistant · Tutor · Grader",
    unit: "Mathematics · Physics · Computer Science",
    period: "Ongoing",
    status: "active",
    abstract:
      "Deconstructing calculus, electromagnetism, and introductory programming into concrete, logical mental models — scaling understanding through Socratic questioning and collaborative learning pipelines.",
    signals: [
      "Math & Physics Learning Assistant — calculus and electromagnetism",
      "Computer Science grader — rigorous, consistent feedback at scale",
      "Socratic, collaborative pedagogy over rote instruction",
    ],
  },
];

export type SkillRegister = {
  id: string;
  label: string;
  caption: string;
  items: string[];
};

/** Section 03 — "Technical Toolkit": skills as a system parameter dashboard. */
export const REGISTERS: SkillRegister[] = [
  {
    id: "core",
    label: "Core Languages",
    caption: "low-level → high-level",
    items: ["Python", "Java", "C", "C++", "JavaScript / TypeScript"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Paradigms",
    caption: "interface & system",
    items: [
      "React",
      "Next.js",
      "React Three Fiber",
      "Custom CSS frameworks",
      "Responsive design",
      "Web accessibility (WCAG)",
    ],
  },
  {
    id: "domain",
    label: "Domain Expertise",
    caption: "research & data",
    items: [
      "Deep Learning",
      "Sparse Autoencoders",
      "Data transformation — Pandas, Matplotlib",
      "System integrity",
    ],
  },
];

export const SECTIONS = [
  { id: "monolith", index: "01", label: "Monolith" },
  { id: "latent-spaces", index: "02", label: "Latent Spaces" },
  { id: "toolkit", index: "03", label: "Toolkit" },
] as const;
