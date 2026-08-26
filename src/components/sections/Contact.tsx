import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";
import { site } from "../../data/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-12 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.14),transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-violet-600/90 dark:text-violet-300/80"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gradient mt-4 font-display text-4xl font-semibold sm:text-5xl"
        >
          Let's build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          I always prefer real human connection. If you want to talk products, teams,
          pro bono tech, or theatre, I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.emailHref}
            className="inline-flex h-12 animate-shimmer items-center justify-center gap-2 rounded-full border border-white/15 bg-[linear-gradient(110deg,#150f22,45%,#38295c,55%,#150f22)] bg-[length:200%_100%] px-8 text-sm font-medium text-white transition-colors hover:border-white/30"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-5 text-zinc-500"
        >
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-violet-600 dark:hover:text-violet-300"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-violet-600 dark:hover:text-violet-300"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-white/[0.06] dark:text-zinc-600 sm:flex-row">
        <span>
          © {new Date().getFullYear()} Eric Krawczyk · {site.location}
        </span>
        <span className="flex items-center gap-4">
          <a
            href={site.links.keybase}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            Keybase
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            Résumé
          </a>
          <a
            href="https://github.com/erickrawczyk/kraw-cz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            Source
          </a>
        </span>
      </footer>
    </section>
  );
}
