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
    subtitle: "I'm a Developer from Ann Arbor, Michigan",
    contents: [
      "My name is Eric Krawczyk, and I make web applications. I spend a lot of time building things in JavaScript, but I'm pretty flexible. I've lived in quite a few places, but right now I'm located in Ann Arbor, Michigan. If you're interested in tech, music, or theatre, let's chat!"
    ]
  },
  {
    name: "Projects",
    backgroundImage: "career-fair",
    backgroundPosition: 'center center',
    title: "What I'm Up To",
    contents: [
      `I'm currently Head of Engineering at
       <a href="http://docnetwork.org" target="_blank">
         DocNetwork
         <i class="fa fa-external-link" aria-hidden="true"></i>
       </a>, an Ann Arbor startup trying to make collecting medical records
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
    iconRows: [
      [
        {
          icon: "react",
          link: "//facebook.github.io/react/",
          tooltip: "React",
          tooltipPostion: "top"
        },
        {
          icon: "js",
          link: "//javascript.com/",
          tooltip: "JavaScript",
          tooltipPostion: "top"
        },
        {
          icon: "sass",
          link: "//sass-lang.com/",
          tooltip: "Sass",
          tooltipPostion: "top"
        },
      ],
      [
        {
          icon: "node",
          link: "//nodejs.org/",
          tooltip: "Node.js",
          tooltipPostion: "bottom"
        },
        {
          icon: "js",
          link: "//javascript.com/",
          tooltip: "JavaScript",
          tooltipPostion: "bottom"
        },
        {
          icon: "sass",
          link: "//sass-lang.com/",
          tooltip: "Sass",
          tooltipPostion: "bottom"
        },
      ],
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
    iconRows: [
      [
        {
          icon: "github",
          link: "//github.com/erickrawczyk/",
          tooltip: "@erickrawczyk",
          tooltipPostion: "bottom"
        },
        {
          icon: "gmail",
          link: "//mailto:eric.krawczyk@gmail.com/",
          tooltip: "eric.krawczyk@gmail.com",
          tooltipPostion: "bottom"
        },
        {
          icon: "linkedin",
          link: "//www.linkedin.com/in/eric-krawczyk-055160b9",
          tooltip: "@eric-krawczyk",
          tooltipPostion: "bottom"
        },
      ],
    ]

  },
]

export default STATE;
