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
        className="group mt-2 inline-flex items-center gap-2 font-display text-3xl font-semibold text-white transition-colors hover:text-indigo-200 md:text-4xl"
      >
        {job.company}
        <ExternalLinkIcon className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-indigo-300" />
      </a>
      <div className="mt-1 text-sm text-zinc-500">{job.location}</div>
      {job.milestone && (
        <div className="mt-3 inline-flex rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-200">
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
      className="rounded-2xl border border-white/[0.08] bg-night-900/80 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {job.roles.map((role) => (
          <div key={role.title} className="text-sm">
            <span className="font-medium text-zinc-100">{role.title}</span>
            <span className="ml-2 font-mono text-xs text-zinc-500">{role.period}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">{job.mission}</p>

      <ul className="mt-5 space-y-3">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400"
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
    <section id="experience" className="relative px-6 py-28 sm:py-36">
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
