import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure once fonts have settled
    const t = window.setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-6xl pb-16">
        {entries.map((item) => (
          <div key={item.id} className="flex justify-start pt-12 md:gap-10 md:pt-24">
            <div className="sticky top-28 z-40 flex max-w-xs flex-col items-start self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute -left-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 dark:bg-night-950 md:left-[13px]">
                <div className="h-3.5 w-3.5 rounded-full border border-violet-300/50 bg-violet-400/20 shadow-[0_0_12px_rgba(167,139,250,0.35)]" />
              </div>
              <div className="hidden md:block md:pl-16">{item.title}</div>
            </div>
            <div className="relative w-full pl-10 pr-1 sm:pl-14 md:pl-4">
              <div className="mb-5 block md:hidden">{item.title}</div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[15px] top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-zinc-300 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-zinc-800 md:left-[31px]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-violet-500 via-cyan-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
