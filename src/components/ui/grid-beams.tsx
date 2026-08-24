import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Beams travel down fixed grid columns; deterministic offsets keep it calm.
const BEAMS = [
  { left: "12%", delay: 0, duration: 6.5 },
  { left: "27%", delay: 2.2, duration: 5.5 },
  { left: "42%", delay: 4.1, duration: 7 },
  { left: "58%", delay: 1.2, duration: 6 },
  { left: "73%", delay: 3.4, duration: 5 },
  { left: "88%", delay: 5.2, duration: 6.8 },
];

export function GridBeams({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* grid */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />

      {/* vertical guide lines the beams ride on */}
      {BEAMS.map((beam) => (
        <div
          key={beam.left}
          className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-zinc-900/[0.07] to-transparent dark:via-white/[0.06]"
          style={{ left: beam.left }}
        />
      ))}

      {/* traveling beams */}
      {BEAMS.map((beam) => (
        <motion.div
          key={`beam-${beam.left}`}
          initial={{ y: "-12rem" }}
          animate={{ y: "110vh" }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-48 w-px bg-gradient-to-b from-transparent via-violet-500 to-cyan-400/60 opacity-70 dark:via-violet-400 dark:to-cyan-300/60"
          style={{ left: beam.left }}
        />
      ))}

      {/* soft radial glow behind the content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14),transparent_60%)]" />

      {/* fade the bottom edge into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent dark:from-night-950" />
    </div>
  );
}
