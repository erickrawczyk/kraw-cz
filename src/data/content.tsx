export const site = {
  name: "Eric Krawczyk",
  role: "Product Technologist",
  location: "Chicago, IL",
  email: "eric.krawczyk@gmail.com",
  emailHref: "mailto:eric.krawczyk+web@gmail.com",
  tagline:
    "I build software products end to end, from first commit to shipped platform, along with the teams that keep them alive.",
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
    "I'm a generalist who builds software products, everything from shaping the problem with users, designing the system, shipping the interface, wiring the infrastructure, and tuning what happens after launch. I've spent ten years doing that work with early and growth-stage B2B startups, where the job description is \"whatever the product needs next.\"",
    "These days I lead engineering at Paladin as VP of Engineering, where we build the platform legal teams use to run pro bono programs and turns professional development into actual representation for people who need it. I still ship code most weeks; leading a team well and staying close to the product aren't opposites, they're the same job.",
    "I believe technology is essential for equitable progress, and I like working on things where the graph going up means someone's life got a little better.",
  ],
  stats: [
    { value: "10+", label: "years shipping B2B SaaS" },
    { value: "4", label: "industries, seed to Series C" },
    { value: "5+", label: "products taken from prototype to platform" },
    { value: "2", label: "engineering teams led & growing" },
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
      "Justice tech. Paladin helps the world's biggest law firms, corporate legal teams, and law schools run efficient pro bono programs, so more people who can't afford a lawyer get one.",
    roles: [
      { title: "VP, Engineering", period: "2024 — Present" },
      { title: "Lead Product Engineer", period: "2022 — 2024" },
      { title: "Senior Software Engineer", period: "2021 — 2022" },
    ],
    bullets: [
      "Grew from senior engineer to leading the engineering team. I now run hiring, mentorship, architecture, and delivery for the platform behind 30+ of the world's largest legal teams and 350+ legal aid organizations.",
      "Directed the build and launch of Paladin Insights, a real-time pro bono analytics product that came out of Paladin's acquisition of Pro Bono Manager, then led the migration of its Am Law 100 customers onto the platform.",
      "Rebuilt the server-rendered Django frontend as a React single-page app: opportunity search got about 10x faster and lawyer engagement with pro bono opportunities rose about 20%.",
      "Shipped time tracking for corporate teams and a pro bono platform for about 30 law schools, while keeping a small team's release train reliable.",
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
      "Renewable energy robotics. SkySpecs flies autonomous drones over wind turbines and turns the imagery into repair and maintenance plans for wind farm operators around the world.",
    roles: [
      { title: "Senior Software Engineer", period: "2020 — 2021" },
      { title: "Software Engineer, Apps & DevOps", period: "2019 — 2020" },
    ],
    bullets: [
      "Built the microservices behind turbine fleet management (authorization, user management, and reporting) as the platform scaled to about 30,000 inspections a year across 1,000 wind farms in 24 countries.",
      "Automated the CI/CD pipeline for stateless infrastructure with GitLab CI and Terraform, so a small team could deploy continuously.",
    ],
    tags: ["Node.js", "Microservices", "Terraform", "GitLab CI", "AWS"],
    milestone: "Software + DevOps",
  },
  {
    id: "deepfield",
    company: "Deepfield",
    url: "https://www.nokia.com/ip-networks/deepfield/",
    location: "Ann Arbor, MI",
    years: "2017 — 2018",
    mission:
      "Network analytics at internet scale. Deepfield, acquired by Nokia, maps how traffic moves through the world's largest networks. Tier-1 carriers use it for real-time performance and security analytics.",
    roles: [{ title: "Software Engineer, Frontend", period: "2017 — 2018" }],
    bullets: [
      "Led the integration of React and Material UI into a legacy view framework, which let carrier customers configure their own real-time dashboards over petabyte-scale network data.",
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
      "Health tech for kids. DocNetwork makes CampDoc and SchoolDoc, the electronic health records that summer camps and schools use to track allergies, medications, and health forms for hundreds of thousands of kids.",
    roles: [
      { title: "Head of Engineering", period: "2016 — 2017" },
      { title: "Software Developer", period: "2014 — 2016" },
    ],
    bullets: [
      "Joined early as third engineer, then led a team of six engineers as the EHR grew past a thousand camps, schools, and child care programs.",
      "Built across the whole product, from the AngularJS front end through the Node.js and Express APIs to the AWS infrastructure underneath.",
    ],
    tags: ["AngularJS", "Node.js", "Express", "PostgreSQL", "AWS"],
    milestone: "First eng leadership role",
  },
];

export interface Project {
  key: string;
  name: string;
  period?: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  // Screenshot of the platform: drop a file in public/projects/ and set
  // e.g. image: "/projects/jovono.png" — the card renders it as a header.
  image?: string;
}

export const contractProjects: Project[] = [
  {
    key: "delivermyride",
    name: "Deliver My Ride",
    period: "2017 – 2021",
    role: "Contract",
    description:
      "A Karmanos-backed platform that let metro Detroiters buy or lease a new car entirely online — live inventory from 60+ dealerships, pre-negotiated pricing with taxes and fees included, and free delivery to your driveway. Covered by TechCrunch and Crain's.",
    tags: ["Automotive", "E-commerce", "Marketplace", "Laravel / PHP"],
    image: "/projects/delivermyride.png",
  },
  {
    key: "jovono",
    name: "Jovono",
    period: "2019 - 2021",
    role: "Contract",
    description:
      "The web home of Jovono, Evan Zimmerman's venture firm backing missionary founders — a site built to carry a fourteen-point charter and a portfolio that includes Anduril, Flexport, and DoNotPay.",
    tags: ["Venture capital", "Brand & web", "React", "Airtable"],
    link: "https://www.jovono.com",
    image: "/projects/jovono.jpg",
  },
  {
    key: "spartanlist",
    name: "Spartan List",
    period: "c. 2018",
    role: "Contract",
    description:
      "A race finder built for the Spartan Nomads community — every Spartan obstacle race on Earth, searchable by continent, month, and race type, and scored on difficulty, landscape, and festival to help nomads plan their next trifecta.",
    tags: ["Fitness community", "Search & discovery", "React"],
    image: "/projects/spartanlist.jpg",
  },
];

export const sideProjects: Project[] = [
  {
    key: "definequeer",
    name: "Define Queer Project",
    period: "2018 — 2022",
    role: "Cofounder",
    description:
      "A community storytelling project collecting and sharing what \"queer\" means to the people who live it — one definition at a time.",
    tags: ["Community", "Storytelling", "LGBTQ+"],
    image: "/projects/define-queer.png",
  },
  {
    key: "argofrienddate",
    name: "Argo Friend Date",
    period: "2015 — 2018",
    role: "Tech Lead",
    description:
      "A full-stack web app for making friends as an adult: matching people into low-stakes platonic friend dates instead of leaving new connections to chance.",
    tags: ["Full-stack", "Matchmaking", "Web app"],
    image: "/projects/argo.png",
  }
];

export const capabilities = [
  {
    key: "build",
    title: "Build",
    blurb:
      "Zero-to-one product engineering: taking an ambiguous problem, turning it into working software from the interface down to the infrastructure, and shipping it while it still matters.",
    chips: ["Product thinking", "Full-stack TypeScript", "React", "APIs & data models"],
  },
  {
    key: "scale",
    title: "Scale",
    blurb:
      "Making systems faster and easier to change. So far that has meant migrating legacy frontends to single-page apps, integrating an acquisition, automating CI/CD, and performance work you can measure in user behavior.",
    chips: ["Migrations", "DevOps & IaC", "Performance", "Reliability"],
  },
  {
    key: "lead",
    title: "Lead",
    blurb:
      "Building the team around the product. I hire, mentor, and run delivery as a VP of Engineering, and I stay close enough to the code to keep my judgment sharp.",
    chips: ["Team building", "Mentorship", "Process design", "Technical strategy"],
  },
];

export const beyond = {
  heading: "Beyond the keyboard",
  blurb:
    "I like building things people gather around, on screen and off. The common thread is community.",
  items: [
    {
      key: "313cc",
      title: "313 Care Collective",
      link: "https://313cc.org",
      role: "First responder & instructor",
      description:
        "Community health organization providing first aid, training, supplies, and logistical support for local political action in Detroit, MI.",
    },
    {
      key: "fourlakes",
      title: "Four Lakes Action Medics",
      role: "First responder",
      description:
        "Street medic collective providing first aid and medical support for community events and political action around Madison, WI.",
    },
    {
      key: "syncytium",
      title: "Syncytium Arts",
      link: "https://syncytium.org",
      role: "Artist, fabricator & bar lead",
      description:
        "An artist collective rooted in Michigan that builds immersive installations for Burning Man and art events across the country.",
    },
  ],
  extras: "Otherwise: theatre, live music, biking, hiking, off-grid power and comms, and dogs. Always dogs.",
};
