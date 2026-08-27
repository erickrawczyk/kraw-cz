import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { capabilities } from "../../data/content";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <SectionHeading
        eyebrow="How I work"
        title="Build. Scale. Lead."
        description="What ten years of generalist work adds up to."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {capabilities.map((cap, i) => {
          const accents = [
            {
              hover: "hover:border-violet-400/50 dark:hover:border-violet-400/30",
              glow: "bg-violet-500/10 group-hover:bg-violet-500/20",
              number: "text-violet-500/80 dark:text-violet-300/70",
            },
            {
              hover: "hover:border-cyan-400/50 dark:hover:border-cyan-400/30",
              glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
              number: "text-cyan-600/80 dark:text-cyan-300/70",
            },
            {
              hover: "hover:border-fuchsia-400/50 dark:hover:border-fuchsia-400/30",
              glow: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20",
              number: "text-fuchsia-500/80 dark:text-fuchsia-300/70",
            },
          ][i % 3];
          return (
          <motion.div
            key={cap.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition-colors dark:border-white/[0.08] dark:bg-night-900 dark:shadow-none ${accents.hover}`}
          >
            <div className={`pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500 ${accents.glow}`} />
            <div className={`font-mono text-xs ${accents.number}`}>0{i + 1}</div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-zinc-900 dark:text-white">
              {cap.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {cap.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cap.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-zinc-200 bg-zinc-100/70 px-3 py-1 text-xs text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
