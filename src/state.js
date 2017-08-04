const STATE = [
  {
    name: "Landing",
    backgroundImage: "scotland",
    backgroundPosition: '85% 50%',
    title: "Eric Krawczyk",
    subtitle: "Full Stack Engineer"
  },
  {
    name: "About",
    backgroundImage: "emp-museum",
    backgroundPosition: 'center center',
    title: "Hey, I'm Eric!",
    contents: [
      "My name is Eric Krawczyk, and I'm a software developer from Ann Arbor, Michigan. I spend a lot of time building things in JavaScript, but I'm pretty flexible. I love making web applications from the ground up, and can jump into any layer of the stack. If you're interested in tech, music, or theatre, let's chat!"
    ]
  },
  {
    name: "Projects",
    backgroundImage: "career-fair",
    backgroundPosition: 'center center',
    title: "What I'm Up To",
    contents: [
      `I'm currently Head of Engineering at
       <a href="http://docnetwork.org" target="_blank"> DocNetwork <i class="fa fa-external-link" aria-hidden="true"></i> </a>, an Ann Arbor startup trying to make collecting medical records
       easy for nurses at summer camps, schools, and child care centers.
      `.replace(/ {2,}/gm, ''),

      `I'm also working on
       <a href="//argofrienddate.com" target="_blank">
         Argo Friend Date
         <i class="fa fa-external-link" aria-hidden="true"></i>
       </a>, an app that helps you meet new people. Just sign up for a time slot
       and we'll randomly set you up on a blind friend date with
       another cool human!
      `.replace(/ {2,}/gm, '')
    ]
  },
  {
    name: "Skills",
    backgroundImage: "nyc",
    backgroundPosition: 'center center',
    title: "These Are My Tools",
    contents: [
      "I'm always learning new things, but here are the tools I'm most familiar with."
    ],
    icons: [
      {
        icon: "react",
        link: "//facebook.github.io/react/",
        tooltip: "React",
      },
      {
        icon: "js",
        link: "//javascript.com/",
        tooltip: "JavaScript",
      },
      {
        icon: "sass",
        link: "//sass-lang.com/",
        tooltip: "Sass",
      },
      {
        icon: "node",
        link: "//nodejs.org/",
        tooltip: "Node.js",
      },
      {
        icon: "angular",
        link: "//angularjs.org/",
        tooltip: "AngularJS",
      },
      {
        icon: "postgres",
        link: "//www.postgresql.org/",
        tooltip: "PostgreSQL",
      },
    ]
  },
  {
    name: "Contact",
    backgroundImage: "sword",
    backgroundPosition: 'center center',
    title: "Let's Talk",
    contents: [
      "I always prefer real human conversation to internet snooping. If you want to know more about web development, need someone for a project, or just want to talk, I'd love to hear from you!",
    ],
    icons: [
      {
        icon: "github",
        link: "//github.com/erickrawczyk/",
        tooltip: "@erickrawczyk",
      },
      {
        icon: "gmail",
        link: "mailto:eric.krawczyk@gmail.com",
        tooltip: "eric.krawczyk@gmail.com",
      },
      {
        icon: "linkedin",
        link: "//www.linkedin.com/in/eric-krawczyk-055160b9",
        tooltip: "@eric-krawczyk",
      },
    ]

  },
]

export default STATE;
