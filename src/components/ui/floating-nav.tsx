import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

export function FloatingNav({
  navItems,
  className,
  cta,
}: {
  navItems: NavItem[];
  className?: string;
  cta?: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.02) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex w-fit max-w-[92vw] items-center gap-1 rounded-full border border-white/10 bg-night-900/80 py-2 pl-6 pr-2 shadow-[0px_2px_24px_-1px_rgba(0,0,0,0.6)] backdrop-blur-md",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`nav-${idx}`}
            href={navItem.link}
            className="relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            {navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}
        {cta}
      </motion.div>
    </AnimatePresence>
  );
}
