import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mx-auto max-w-3xl text-center", className)}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-600/90 dark:text-violet-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
