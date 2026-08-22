import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { capabilities } from "../../data/content";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="How I work"
        title="Build. Scale. Lead."
        description="What ten years of generalist work adds up to."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-night-900 p-7 transition-colors hover:border-indigo-400/30"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-indigo-500/20" />
            <div className="font-mono text-xs text-zinc-600">0{i + 1}</div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">{cap.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{cap.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cap.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
