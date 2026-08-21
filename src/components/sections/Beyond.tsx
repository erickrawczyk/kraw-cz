import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { beyond } from "../../data/content";

export function Beyond() {
  return (
    <section id="beyond" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading eyebrow="Off hours" title={beyond.heading} description={beyond.blurb} />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {beyond.items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="rounded-2xl border border-white/[0.08] bg-night-900 p-7"
          >
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-300/70">
              {item.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 text-center text-sm italic text-zinc-500"
      >
        {beyond.extras}
      </motion.p>
    </section>
  );
}
