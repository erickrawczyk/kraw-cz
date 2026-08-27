import { motion, useReducedMotion } from "framer-motion";
import { GridBeams } from "../ui/grid-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon, MapPinIcon } from "../icons";
import { site } from "../../data/content";
import ericPhoto from "../../assets/eric.jpg";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <GridBeams />

      <div className="relative z-10 mx-auto max-w-4xl border-x border-zinc-900/[0.06] px-6 pb-24 pt-28 text-center dark:border-white/[0.05] sm:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-7 w-fit rounded-full bg-gradient-to-br from-violet-400 via-purple-400 to-cyan-400 p-[3px] shadow-[0_0_45px_rgba(167,139,250,0.3)]"
        >
          <img
            src={ericPhoto}
            alt="Eric Krawczyk"
            className="h-28 w-28 rounded-full border-[5px] border-zinc-50 object-cover dark:border-night-950 sm:h-32 sm:w-32"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-900/10 bg-white/60 px-4 py-1.5 text-xs text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
        >
          <MapPinIcon className="h-3.5 w-3.5 text-violet-500 dark:text-violet-300" />
          {site.location}
          <span className="mx-1 h-3 w-px bg-zinc-900/15 dark:bg-white/15" />
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            VP Engineering @ Paladin
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl md:text-8xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 font-display text-xl font-medium sm:text-2xl md:text-3xl"
        >
          <span className="text-gradient">{site.role}</span>
        </motion.p>

        <TextGenerateEffect
          words={site.tagline}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(110deg,#150f22,45%,#38295c,55%,#150f22)] bg-[length:200%_100%] px-8 text-sm font-medium text-white transition-colors hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-violet-400/50 motion-reduce:animate-none"
          >
            See the work
          </a>
          <a
            href={site.emailHref}
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900/10 bg-white/70 px-8 text-sm font-medium text-zinc-700 backdrop-blur transition-colors hover:bg-white hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.1] dark:hover:text-white"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 flex items-center justify-center gap-5 text-zinc-400 dark:text-zinc-500"
        >
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.emailHref}
            aria-label="Email"
            className="transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-300"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDownIcon className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
