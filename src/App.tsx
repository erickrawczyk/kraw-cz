import { FloatingNav } from "./components/ui/floating-nav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Portfolio } from "./components/sections/Portfolio";
import { Capabilities } from "./components/sections/Capabilities";
import { Beyond } from "./components/sections/Beyond";
import { Contact } from "./components/sections/Contact";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/icons";
import { site } from "./data/content";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Portfolio", link: "#projects" },
  { name: "Beyond", link: "#beyond" },
];

export default function App() {
  return (
    <main className="relative min-h-screen bg-night-950">
      <FloatingNav
        navItems={navItems}
        cta={
          <>
            <span className="mx-1 hidden h-4 w-px bg-white/10 sm:block" />
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden rounded-full p-2 text-zinc-400 transition-colors hover:text-white sm:block"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden rounded-full p-2 text-zinc-400 transition-colors hover:text-white sm:block"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 text-sm text-violet-100 transition-colors hover:bg-violet-400/20"
            >
              <MailIcon className="h-3.5 w-3.5" />
              Say hi
            </a>
          </>
        }
      />
      <Hero />
      <About />
      <Capabilities />
      <Experience />
      <Portfolio />
      <Beyond />
      <Contact />
    </main>
  );
}
