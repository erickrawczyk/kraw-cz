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
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Show the nav whenever the reader is past the hero, hide it on top of it.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > window.innerHeight * 0.6);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto flex w-fit max-w-[92vw] items-center gap-1 rounded-full border border-zinc-200 bg-white/80 py-2 pl-6 pr-2 shadow-[0px_2px_24px_-1px_rgba(0,0,0,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-night-900/80 dark:shadow-[0px_2px_24px_-1px_rgba(0,0,0,0.6)]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`nav-${idx}`}
            href={navItem.link}
            className="relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
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
