import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { HoverEffect, Card, type HoverCardItem } from "../ui/card-hover-effect";
import { ExternalLinkIcon } from "../icons";
import { contractProjects, sideProjects, type Project } from "../../data/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      {project.image && (
        <div className="-mx-5 -mt-5 mb-5 overflow-hidden border-b border-zinc-200 dark:border-white/[0.06]">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      {(project.period || project.link) && (
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">{project.period}</span>
          {project.link && (
            <ExternalLinkIcon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-violet-500 dark:text-zinc-600 dark:group-hover:text-violet-300" />
          )}
        </div>
      )}
      <h3 className="mt-4 font-display text-xl font-semibold text-zinc-900 dark:text-white">
        {project.name}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-violet-600/80 dark:text-violet-300/70">
        {project.role}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-200 bg-zinc-100/70 px-2.5 py-0.5 font-mono text-[11px] text-zinc-500 dark:border-white/[0.08] dark:bg-white/[0.03]"
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
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Independent & contract work"
        description="Products I've built outside the day job, for founders, for firms, and sometimes just for fun."
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
          <div className="h-px flex-1 bg-gradient-to-l from-zinc-900/10 to-transparent dark:from-white/10" />
          <h3 className="font-display text-lg font-medium text-zinc-700 dark:text-zinc-300">Side Quests</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-900/10 to-transparent dark:from-white/10" />
        </div>
        <div className="mt-4">
          <HoverEffect
            items={toHoverItems(sideProjects)}
            className="mx-auto max-w-3xl md:grid-cols-2 lg:grid-cols-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
