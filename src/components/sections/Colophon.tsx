import { PROFILE } from "@/lib/content";

export default function Colophon() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-hairline px-[var(--gutter)] py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-display text-xl font-light text-bone">
            {PROFILE.name}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-bone-dim">
            Designed &amp; engineered in the open
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-bone-dim">
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-phosphor"
            >
              {PROFILE.email}
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
        </ul>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-bone-faint sm:flex-row sm:justify-between">
        <span>© {year} — {PROFILE.location}</span>
        <span>Digital Garden / build 2.0 / 60fps target</span>
      </div>
    </footer>
  );
}
