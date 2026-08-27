import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { about } from "../../data/content";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <SectionHeading eyebrow="About" title={about.heading} />

      <div className="mt-14 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <div className="grid content-start gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/[0.08] dark:bg-night-900 dark:shadow-none"
            >
              <div className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text font-display text-3xl font-semibold text-transparent dark:from-violet-300 dark:to-cyan-300">
                {stat.value}
              </div>
              <div className="mt-1 text-sm leading-snug text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
