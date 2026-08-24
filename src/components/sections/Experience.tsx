import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { Timeline, type TimelineEntry } from "../ui/timeline";
import { ExternalLinkIcon } from "../icons";
import { jobs, type Job } from "../../data/content";

function EntryTitle({ job }: { job: Job }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">{job.years}</div>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-2 inline-flex items-center gap-2 font-display text-3xl font-semibold text-zinc-900 transition-colors hover:text-violet-600 dark:text-white dark:hover:text-violet-200 md:text-4xl"
      >
        {job.company}
        <ExternalLinkIcon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-violet-500 dark:text-zinc-600 dark:group-hover:text-violet-300" />
      </a>
      <div className="mt-1 text-sm text-zinc-500">{job.location}</div>
      {job.milestone && (
        <div className="mt-3 inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-700 dark:border-violet-400/25 dark:bg-violet-400/10 dark:text-violet-200">
          {job.milestone}
        </div>
      )}
    </div>
  );
}

function EntryContent({ job }: { job: Job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-night-900/80 dark:shadow-none sm:p-8"
    >
      <div className="flex flex-col gap-y-2">
        {job.roles.map((role) => (
          <div key={role.title} className="text-sm">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{role.title}</span>
            <span className="ml-2 font-mono text-xs text-zinc-500">{role.period}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
        {job.mission}
      </p>

      <ul className="mt-5 space-y-3">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-[15px]">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 bg-zinc-100/70 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const entries: TimelineEntry[] = jobs.map((job) => ({
    id: job.id,
    title: <EntryTitle job={job} />,
    content: <EntryContent job={job} />,
  }));

  return (
    <section id="experience" className="relative px-6 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="A decade of building, in four acts"
        description="Full-time roles in legal tech, renewable energy, network analytics, and healthcare. The stack changes every time. The job stays the same: turn a hard problem into a product people rely on."
      />
      <div className="mt-4">
        <Timeline entries={entries} />
      </div>
    </section>
  );
}
