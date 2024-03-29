import React from 'react';

const STATE = [
  {
    name: 'Landing',
    backgroundImage: 'central-park',
    backgroundPosition: '75% 50%',
    title: 'Eric Krawczyk',
    subtitle: 'Software Engineer',
  },
  {
    name: 'About',
    backgroundImage: 'barcelona',
    backgroundPosition: '25% 75%',
    title: "Hey, I'm Eric!",
    contents: [
      <p>I'm a software developer from Detroit, Michigan!</p>,
      <p>
        I spend a lot of time building things in JavaScript, but I'm pretty flexible. I love making
        web applications from the ground up, jumping into every layer of the stack. If you're
        interested in tech, music, or theatre, let's chat!
      </p>,
    ],
  },
  {
    name: 'Projects',
    backgroundImage: 'deepfield',
    backgroundPosition: '20%',
    title: "What I'm Up To",
    contents: [
      <p>
        I'm currently building out &nbsp;
        <a href="https://joinpaladin.com/" target="_blank" rel="noopener noreferrer">
          Paladin
        </a>
        , a platform that connects people who need legal representation to pro-bono lawyers.
      </p>,
      <p>
        Previously, I've worked at&nbsp;
        <a href="https://skyspecs.com/" target="_blank" rel="noopener noreferrer">
          SkySpecs
        </a>
        , a renewable energy data and robotics startup,&nbsp;
        <a href="http://deepfield.com" target="_blank" rel="noopener noreferrer">
          Deepfield
        </a>
        , a big data analytics platform for massive networks, and&nbsp;
        <a href="https://www.docnetwork.org/" target="_blank" rel="noopener noreferrer">
          DocNetwork
        </a>
        , an Electronic Health Record system for schools and summer camps.
      </p>,
    ],
  },
  {
    name: 'Skills',
    backgroundImage: 'nyc',
    backgroundPosition: 'center center',
    title: 'These Are My Tools',
    contents: [
      <p>I'm always learning new things, but here are the tools I'm most familiar with.</p>,
    ],
    icons: [
      {
        icon: 'react',
        link: '//facebook.github.io/react/',
        tooltip: 'React',
      },
      {
        icon: 'nodejs',
        link: '//nodejs.org/',
        tooltip: 'Node.js',
      },
      {
        icon: 'python',
        link: '//python.org/',
        tooltip: 'Python',
      },
      {
        icon: 'postgresql',
        link: '//www.postgresql.org/',
        tooltip: 'PostgreSQL',
      },
      {
        icon: 'docker',
        link: '//www.docker.com/',
        tooltip: 'Docker',
      },
      {
        icon: 'amazonwebservices',
        link: '//aws.amazon.com/',
        tooltip: 'AWS',
      },
    ],
  },
  {
    name: 'Contact',
    backgroundImage: 'sword',
    backgroundPosition: 'center center',
    title: "Let's Talk",
    contents: [
      <p>
        I always prefer real human connection. If you want to know more about web development, need
        someone for a project, or just want to talk, I'd love to hear from you!
      </p>,
    ],
    icons: [
      {
        icon: 'github',
        link: '//github.com/erickrawczyk/',
        tooltip: '@erickrawczyk',
        direct: true,
      },
      {
        icon: 'google',
        link: 'mailto:eric.krawczyk@gmail.com',
        tooltip: 'eric.krawczyk@gmail.com',
        direct: true,
      },
      {
        icon: 'linkedin',
        link: '//www.linkedin.com/in/eric-krawczyk',
        tooltip: '@eric-krawczyk',
        direct: true,
      },
    ],
  },
];

export default STATE;
