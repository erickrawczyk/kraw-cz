import { MotionConfig } from "framer-motion";
import { FloatingNav } from "./components/ui/floating-nav";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Portfolio } from "./components/sections/Portfolio";
import { Capabilities } from "./components/sections/Capabilities";
import { Beyond } from "./components/sections/Beyond";
import { Contact } from "./components/sections/Contact";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  UserIcon,
  BriefcaseIcon,
  GridIcon,
  CompassIcon,
} from "./components/icons";
import { site } from "./data/content";

const navItems = [
  { name: "About", link: "#about", icon: <UserIcon className="h-4 w-4" /> },
  { name: "Experience", link: "#experience", icon: <BriefcaseIcon className="h-4 w-4" /> },
  { name: "Portfolio", link: "#projects", icon: <GridIcon className="h-4 w-4" /> },
  { name: "Beyond", link: "#beyond", icon: <CompassIcon className="h-4 w-4" /> },
];

export default function App() {
  return (
    // "user" defers to the OS prefers-reduced-motion setting: transform-based
    // motion (slide/scale) is stripped for those users, opacity fades stay.
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-zinc-50 dark:bg-night-950">
        <ThemeToggle className="fixed right-4 top-4 z-[5001] border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-night-900/80 dark:shadow-none" />
        <FloatingNav
          navItems={navItems}
          cta={(visible) => (
            <>
              <span className="mx-1 hidden h-4 w-px bg-zinc-900/10 dark:bg-white/10 sm:block" />
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                tabIndex={visible ? 0 : -1}
                className="hidden rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:block"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                tabIndex={visible ? 0 : -1}
                className="hidden rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:block"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={site.emailHref}
                tabIndex={visible ? 0 : -1}
                className="ml-1 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-700 transition-colors hover:bg-violet-500/20 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-100 dark:hover:bg-violet-400/20"
              >
                <MailIcon className="h-3.5 w-3.5" />
                Say hi
              </a>
            </>
          )}
        />
        <Hero />
        <About />
        <Capabilities />
        <Experience />
        <Portfolio />
        <Beyond />
        <Contact />
      </main>
    </MotionConfig>
  );
}
