# eric.kraw.cz — Site Outline

The content strategy behind this site. Sections below map 1:1 to components in
`src/components/sections/`; all copy lives in `src/data/content.tsx`.

## Positioning

**Eric Krawczyk — Product Technologist.**

Not "engineering leader," not "full-stack developer" — a *product technologist*: a
technology generalist who builds software products end to end. The leadership story
(VP of Engineering at Paladin) is presented as evidence of range, not as the identity.
The throughline across every section: shaping ambiguous problems into shipped products,
at every layer of the stack, and increasingly through teams.

Voice: warm, direct, Midwest-honest, craft-focused. His own words set the tone —
"Jack of all trades, master of some" (GitHub bio) and "technology is essential for
equitable progress" (Paladin bio).

## Structure

1. **Floating nav** — pill nav (Aceternity FloatingNav) that appears on scroll-up:
   About / Experience / Portfolio / Beyond, GitHub + LinkedIn icons, "Say hi" mailto CTA.

2. **Hero** — full-viewport, dual spotlight sweep over a blueprint grid.
   - Status pill: Detroit, Michigan · VP Engineering @ Paladin (the one place the title
     leads, worn lightly as a status, not a headline)
   - H1: Eric Krawczyk → gradient subtitle: Product Technologist
   - Generated-text tagline: "I build software products end to end, from first commit
     to shipped platform, along with the teams that keep them alive."
   - CTAs: "See the work" (#experience) · "Get in touch" (mailto) · social icons

3. **About** — "Jack of all trades, master of some."
   - Three paragraphs: (1) the generalist thesis — the whole product, not just the code;
     (2) current chapter at Paladin — leads engineering *and* still ships, framed as one
     job; (3) the values line — equitable progress, graphs going up meaning lives
     getting better.
   - Stat cards: 10+ years B2B SaaS · 4 industries, seed to Series C · 0→1 products ·
     1 engineering team led.

4. **Experience — the full-time timeline** (Aceternity scroll-beam timeline, newest first).
   Each entry: sticky company + years + milestone chip on the left; card on the right
   with role progression, one-line company mission, outcome bullets, tech tags.
   - **Paladin** (2021–now, Chicago/remote) — Senior SWE → Lead Product Engineer →
     VP Engineering. Justice tech. Bullets: grew from IC to leading the team behind 30+
     of the biggest legal orgs & 350+ legal aid orgs; directed Paladin Insights (built
     from the Pro Bono Manager acquisition) and its Am Law 100 migration; Django → React
     SPA rebuild (~10x faster search, ~20% more lawyer engagement); time tracking for
     corporates + law-school platform (~30 schools).
   - **SkySpecs** (2019–2021, Ann Arbor/remote) — SWE (Apps & DevOps) → Senior SWE.
     Renewable energy robotics. Fleet-management/auth/reporting microservices at the
     scale of ~30k inspections/yr across 1,000 wind farms in 24 countries; GitLab CI +
     Terraform CI/CD.
   - **Deepfield** (2017–2018, Ann Arbor) — Frontend SWE at the Nokia-acquired network
     analytics company; led React + Material UI integration for configurable real-time
     dashboards over petabyte-scale network data.
   - **DocNetwork** (2014–2017, Ann Arbor) — Software Developer → Head of Engineering.
     CampDoc/SchoolDoc EHR; early employee to leading six engineers; 1,000+ camps,
     schools & child care programs; AngularJS/Node/Express/AWS.

5. **Portfolio — independent & contract work** (Aceternity hover-effect cards).
   Each card has an optional screenshot header: drop an image in `public/projects/`
   and set `image: "/projects/<name>.png"` on the project in `src/data/content.tsx`.
   - **Deliver My Ride** (2017–2021) — Karmanos-backed online car buying &
     home delivery for metro Detroit; 60+ dealerships; TechCrunch/Crain's coverage.
   - **Jovono** — web home of Evan Zimmerman's venture firm (Anduril, Flexport,
     DoNotPay); charter-forward brand site.
   - **Spartan List** (c. 2018) — race finder for the Spartan Nomads obstacle-race
     community: search every Spartan race worldwide, scored on difficulty,
     landscape, and festival.
   - **Side quests** row: Define Queer (community definitions of the word queer) and
     Argo Friend Date (blind friend dates by time slot, c. 2017).

6. **How I work — Build · Scale · Lead** — the generalist's toolkit, three ways:
   0→1 product engineering; migrations/DevOps/performance; team building & technical
   strategy. This is where "VP" becomes a capability rather than a title.

7. **Beyond the keyboard** — 313 Care Collective (first responder & instructor),
   Syncytium Arts (artist/fabricator, immersive installations), plus theatre, live
   music, biking, hiking, dogs. The "community" throughline, off-screen.

8. **Contact + footer** — "Let's build something." Email CTA, GitHub/LinkedIn,
   Keybase/résumé/source links.

## Design system

- Stack: Vite + React 18 + TypeScript + Tailwind + framer-motion (Aceternity-style
  components vendored in `src/components/ui/`).
- Dark, near-black palette (`night-950` #050508) with indigo→cyan gradient accents;
  Space Grotesk for display, Inter for body, JetBrains Mono for meta text — all
  self-hosted via Fontsource.
- Motion: spotlight sweep, staggered text generation, scroll-driven timeline beam,
  whileInView reveals, shared-layout hover highlight on cards. The nav stays visible
  whenever the reader is below the hero.
- Copy follows the blader/humanizer skill: no em dashes in prose, plain verbs,
  no stock AI phrasing, and Eric's own recurring phrases kept intact.

## Fact-check flags

- Spartan List is described from Eric's own screenshot of the product (the Spartan
  Nomads race finder). The spartanlist.com domain has since lapsed and been
  re-registered, so the card has no link.
- The Define Queer blurb is a best guess from the project's name. No public trace of
  it survives, so Eric should check that description.
- Education is intentionally omitted (résumé lists U-M CS as "pursued").
- No FedRAMP or compliance certifications are claimed for Paladin publicly, so the
  site doesn't either.
- Paladin metrics (10x search, 20% engagement, 30+/350+ orgs, ~30 law schools) come
  from Eric's résumé and Paladin's public press coverage.
