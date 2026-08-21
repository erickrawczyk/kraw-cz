import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { HoverEffect, Card, type HoverCardItem } from "../ui/card-hover-effect";
import { ExternalLinkIcon } from "../icons";
import { contractProjects, sideProjects, type Project } from "../../data/content";

function statusStyles(status: string): string {
  switch (status) {
    case "Sunset":
      return "border-amber-400/25 bg-amber-400/10 text-amber-200";
    case "Side project":
      return "border-cyan-400/25 bg-cyan-400/10 text-cyan-200";
    default:
      return "border-emerald-400/25 bg-emerald-400/10 text-emerald-200";
  }
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${statusStyles(project.status)}`}
          >
            {project.status}
          </span>
          {project.period && (
            <span className="font-mono text-[11px] text-zinc-600">{project.period}</span>
          )}
        </div>
        {project.link && (
          <ExternalLinkIcon className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-indigo-300" />
        )}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-indigo-300/70">
        {project.role}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}

function toHoverItems(projects: Project[]): HoverCardItem[] {
  return projects.map((project) => ({
    key: project.key,
    link: project.link,
    card: <ProjectCard project={project} />,
  }));
}

export function Portfolio() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Portfolio"
        title="Independent & contract work"
        description="Products I've built outside the day job — for founders, firms, and occasionally just for the fun of it."
      />

      <div className="mt-12">
        <HoverEffect items={toHoverItems(contractProjects)} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <div className="flex items-center gap-4">
          <h3 className="font-display text-lg font-medium text-zinc-300">Side quests</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        <div className="mt-4">
          <HoverEffect items={toHoverItems(sideProjects)} />
        </div>
      </motion.div>
    </section>
  );
}
