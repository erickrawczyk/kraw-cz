export const site = {
  name: "Eric Krawczyk",
  role: "Product Technologist",
  location: "Detroit, Michigan",
  email: "eric.krawczyk@gmail.com",
  tagline:
    "I build software products end to end — from first commit to shipped platform, and the teams that keep them alive.",
  intro:
    "A decade of B2B SaaS across legal tech, renewable energy, healthcare, and network analytics.",
  links: {
    github: "https://github.com/erickrawczyk",
    linkedin: "https://www.linkedin.com/in/eric-krawczyk",
    resume: "https://github.com/erickrawczyk/resume",
    keybase: "https://keybase.io/etkraw",
  },
};

export const about = {
  heading: "Jack of all trades, master of some.",
  paragraphs: [
    "I'm a generalist who builds software products. Not just the code — the whole thing: shaping the problem with users, designing the system, shipping the interface, wiring the infrastructure, and tuning what happens after launch. I've spent ten years doing that inside early and growth-stage B2B startups, where the job description is \"whatever the product needs next.\"",
    "These days I lead engineering at Paladin as VP of Engineering, where we build the platform legal teams use to run pro bono programs — software that turns goodwill into actual representation for people who need it. I still ship code most weeks; leading a team well and staying close to the product aren't opposites, they're the same job.",
    "I believe technology is essential for equitable progress, and I like working on things where the graph going up means someone's life got a little better.",
  ],
  stats: [
    { value: "10+", label: "years shipping B2B SaaS" },
    { value: "4", label: "industries, seed to Series C" },
    { value: "0→1", label: "products taken from prototype to platform" },
    { value: "1", label: "engineering team led & growing" },
  ],
};

export interface Role {
  title: string;
  period: string;
}

export interface Job {
  id: string;
  company: string;
  url: string;
  location: string;
  years: string;
  mission: string;
  roles: Role[];
  bullets: string[];
  tags: string[];
  milestone?: string;
}

export const jobs: Job[] = [
  {
    id: "paladin",
    company: "Paladin",
    url: "https://www.joinpaladin.com",
    location: "Chicago, IL · Remote",
    years: "2021 — Now",
    mission:
      "Justice tech. Paladin helps the world's biggest law firms, corporate legal teams, and law schools run efficient pro bono programs — increasing access to justice for the people the legal system leaves behind.",
    roles: [
      { title: "VP, Engineering", period: "2024 —" },
      { title: "Lead Product Engineer", period: "2022 — 2024" },
      { title: "Senior Software Engineer", period: "2021 — 2022" },
    ],
    bullets: [
      "Grew from senior engineer to leading the engineering team — hiring, mentorship, architecture, and delivery for the platform behind 30+ of the world's largest legal teams and 350+ legal aid organizations.",
      "Directed the build and launch of Paladin Insights, a real-time pro bono analytics product born from Paladin's acquisition of Pro Bono Manager — and led the migration of its Am Law 100 customer base onto the platform.",
      "Rebuilt the server-rendered Django frontend as a modern React single-page app: opportunity search got ~10x faster and lawyer engagement with pro bono opportunities rose ~20%.",
      "Shipped the platform's newest growth surfaces — time tracking for corporate teams and a pro bono platform for ~30 law schools — while keeping a small team's release train reliable.",
    ],
    tags: ["React", "TypeScript", "GraphQL", "Python / Django", "PostgreSQL", "AWS / Heroku"],
    milestone: "IC → VP Engineering",
  },
  {
    id: "skyspecs",
    company: "SkySpecs",
    url: "https://skyspecs.com",
    location: "Ann Arbor, MI · Remote",
    years: "2019 — 2021",
    mission:
      "Renewable energy robotics. SkySpecs flies autonomous drones over wind turbines and turns the imagery into asset-management intelligence for wind farm operators worldwide.",
    roles: [
      { title: "Senior Software Engineer", period: "2020 — 2021" },
      { title: "Software Engineer, Apps & DevOps", period: "2019 — 2020" },
    ],
    bullets: [
      "Built the microservices behind turbine fleet management — authorization, user management, and reporting — as the platform scaled to ~30,000 inspections a year across 1,000 wind farms in 24 countries.",
      "Automated the CI/CD pipeline for stateless infrastructure with GitLab CI and Terraform, letting a small team deploy continuously with confidence.",
    ],
    tags: ["Node.js", "Microservices", "Terraform", "GitLab CI", "AWS"],
    milestone: "Series C during tenure",
  },
  {
    id: "deepfield",
    company: "Deepfield",
    url: "https://www.nokia.com/ip-networks/deepfield/",
    location: "Ann Arbor, MI",
    years: "2017 — 2018",
    mission:
      "Network analytics at internet scale. Deepfield — acquired by Nokia — maps how traffic moves through the world's largest networks, powering real-time performance and security analytics for tier-1 carriers.",
    roles: [{ title: "Software Engineer, Frontend", period: "2017 — 2018" }],
    bullets: [
      "Led the integration of React and Material UI into a legacy view framework, giving carrier customers configurable real-time analytics dashboards over petabyte-scale network data.",
    ],
    tags: ["React", "Material UI", "Data Visualization"],
    milestone: "Nokia subsidiary",
  },
  {
    id: "docnetwork",
    company: "DocNetwork",
    url: "https://docnetwork.org",
    location: "Ann Arbor, MI",
    years: "2014 — 2017",
    mission:
      "Health tech for kids. DocNetwork makes CampDoc and SchoolDoc — the electronic health record that summer camps and schools use to keep hundreds of thousands of kids safe.",
    roles: [
      { title: "Head of Engineering", period: "2016 — 2017" },
      { title: "Software Developer", period: "2014 — 2016" },
    ],
    bullets: [
      "Early employee who grew into leading a team of six engineers, scaling the EHR to more than a thousand camps, schools, and child care programs.",
      "Built across the whole product — AngularJS front end, Node.js and Express APIs, and the AWS infrastructure underneath — from design through deployment.",
    ],
    tags: ["AngularJS", "Node.js", "Express", "PostgreSQL", "AWS"],
    milestone: "First eng leadership role",
  },
];

export interface Project {
  key: string;
  name: string;
  status: string;
  period?: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

export const contractProjects: Project[] = [
  {
    key: "delivermyride",
    name: "Deliver My Ride",
    status: "Sunset",
    period: "2017 – 2021",
    role: "Contract product engineering",
    description:
      "A Karmanos-backed platform that let metro Detroiters buy or lease a new car entirely online — live inventory from 60+ dealerships, pre-negotiated pricing with taxes and fees included, and free delivery to your driveway. Covered by TechCrunch and Crain's.",
    tags: ["Automotive", "E-commerce", "Marketplace"],
  },
  {
    key: "jovono",
    name: "Jovono",
    status: "Live",
    role: "Contract design & build",
    description:
      "The web home of Jovono, Evan Zimmerman's venture firm backing missionary founders — a site built to carry a fourteen-point charter and a portfolio that includes Anduril, Flexport, and DoNotPay.",
    tags: ["Venture capital", "Brand & web"],
    link: "https://www.jovono.com",
  },
  {
    key: "spartanlist",
    name: "Spartanlist",
    status: "Sunset",
    period: "College era",
    role: "Creator",
    description:
      "A campus classifieds marketplace for Michigan State students — buy, sell, and trade inside the Spartan community instead of on Craigslist. An early lesson in building, launching, and sunsetting a real product.",
    tags: ["Marketplace", "Early work"],
  },
];

export const sideProjects: Project[] = [
  {
    key: "attention-ally",
    name: "Attention Ally",
    status: "Side project",
    role: "Creator",
    description:
      "A GPT-powered assistant that keeps you focused by managing your Google Calendar and Todoist lists for you.",
    tags: ["AI", "GPT", "Productivity"],
    link: "https://github.com/erickrawczyk/attention-ally",
  },
  {
    key: "alphasteg",
    name: "AlphaSteg",
    status: "Side project",
    role: "Creator",
    description:
      "A steganography experiment that hides encrypted files inside music streams. Because sometimes the fun is in the hiding.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/erickrawczyk/AlphaSteg",
  },
  {
    key: "resume",
    name: "CI-built résumé",
    status: "Side project",
    role: "Creator",
    description:
      "This résumé builds itself: a React + Tailwind document that CircleCI renders to PDF and JPG with Puppeteer on every push.",
    tags: ["React", "CircleCI", "Puppeteer"],
    link: "https://github.com/erickrawczyk/resume",
  },
];

export const capabilities = [
  {
    key: "build",
    title: "Build",
    blurb:
      "Zero-to-one product engineering. Shaping ambiguous problems into working software — interface, API, data model, and infrastructure — and shipping it while it still matters.",
    chips: ["Product thinking", "Full-stack TypeScript", "React", "APIs & data models"],
  },
  {
    key: "scale",
    title: "Scale",
    blurb:
      "Making systems faster, safer, and easier to change: SPA migrations off legacy frameworks, acquisition integrations, CI/CD automation, and performance work measured in real user outcomes.",
    chips: ["Migrations", "DevOps & IaC", "Performance", "Reliability"],
  },
  {
    key: "lead",
    title: "Lead",
    blurb:
      "Building the team around the product. Hiring, mentoring, and running delivery as a VP of Engineering — while staying close enough to the code to keep judgment sharp.",
    chips: ["Team building", "Mentorship", "Process design", "Technical strategy"],
  },
];

export const beyond = {
  heading: "Beyond the keyboard",
  blurb:
    "The through-line is community: I like building things people gather around — on screen and off.",
  items: [
    {
      key: "313cc",
      title: "313 Care Collective",
      role: "First responder & instructor",
      description:
        "Community health organization providing first aid, training, supplies, and logistical support for local political action in Detroit.",
    },
    {
      key: "syncytium",
      title: "Syncytium Arts",
      role: "Artist, fabricator & director of hospitality",
      description:
        "An artist collective building immersive installations for ephemeral events around Ann Arbor and Detroit.",
    },
  ],
  extras: "Otherwise: theatre, live music, biking, hiking, and dogs. Always dogs.",
};
