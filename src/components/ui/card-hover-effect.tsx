import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface HoverCardItem {
  key: string;
  link?: string;
  card: React.ReactNode;
}

export function HoverEffect({
  items,
  className,
}: {
  items: HoverCardItem[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, idx) => {
        const Wrapper = item.link ? "a" : "div";
        return (
          <Wrapper
            key={item.key}
            {...(item.link
              ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-violet-500/[0.06] dark:bg-violet-400/[0.07]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            {item.card}
          </Wrapper>
        );
      })}
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-1 shadow-sm transition-colors duration-300 group-hover:border-violet-400/50 dark:border-white/[0.08] dark:bg-night-900 dark:shadow-none dark:group-hover:border-violet-400/30",
        className
      )}
    >
      <div className="relative z-50 flex h-full flex-col p-5">{children}</div>
    </div>
  );
}
