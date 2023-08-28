import { IProject, IWorkExperience } from "./types";

export const RESUME_SECTIONS = ["About", "Experience", "Projects"];

export const WorkExperience: IWorkExperience[] = [
  {
    companyName: "EPAM Systems",
    companyLink: "https://www.epam.de/",
    jobTitle: "Senior Software Engineer",
    projectDescription: "Contact Center Application for Belgium-based business",
    skills: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material-UI",
      "Jest",
      "Twilio",
      "CI/CD",
      "Serverless",
      "AWS",
      "Node.js",
    ],
    years: {
      beginning: "June 2021",
      end: "Current",
    },
    bulletPoints: [
      "Built a project from the POC to the point of serving customers from 40 different countries",
      "Led a team of 3 developers following scrum artifacts and rituals",
      "Initiated and drove code style standardization and introduced unit testing to the project",
      "Maintained documentation and managed technical debt to ensure a clean and stable code base, resulting in a 30% decrease in incoming incidents",
      "Conducted technical interviews and onboarded 4 developers without any impact on the sprint velocity",
      "Introduced CI/CD pipeline to the project, enabling bi-weekly releases to production",
    ],
  },
  {
    companyName: "Emphasoft",
    companyLink: "https://emphasoft.com/",
    jobTitle: "Software Engineer",
    projectDescription: "US-based FinTech startup",
    skills: [
      "React.js",
      "TypeScript",
      "Redux",
      "Jest",
      "Sentry",
      "CI/CD",
      "CoreUI",
    ],
    years: {
      beginning: "October 2020",
      end: "June 2021",
    },
    bulletPoints: [
      "Led the frontend development during an MVP phase, released the product in four weeks, and enabled the business to start onboarding customers and generating new leads",
      "Collaborated with a fully distributed team of Developers and Designers in an asynchronous manner",
      "Developed CI/CD pipeline ensuring regular bug-free releases of the new features",
      "Cooperated closely with UI/UX team to identify design enhancements for customer onboarding flow, which allowed the business to provide initial support throughout the onboarding phase",
    ],
  },
  {
    companyName: "Freelance",
    jobTitle: "Software Engineer",
    projectDescription: "EdTech application for UK-based customer",
    skills: [
      "React.js",
      "JavaScript",
      "Firebase",
      "Node.js",
      "Material-UI",
      "BEM",
      "WordPress",
      "Drupal",
    ],
    years: {
      beginning: "October 2020",
      end: "June 2021",
    },
    bulletPoints: [
      "Led the frontend development during an MVP phase, released the product in four weeks, and enabled the business to start onboarding customers and generating new leads",
      "Collaborated with a fully distributed team of Developers and Designers in an asynchronous manner",
      "Developed CI/CD pipeline ensuring regular bug-free releases of the new features",
      "Cooperated closely with UI/UX team to identify design enhancements for customer onboarding flow, which allowed the business to provide initial support throughout the onboarding phase",
    ],
  },
];

export const Projects: IProject[] = [
  {
    img: "/dinos-nigthmare.png",
    title: "Dino's nightmare",
    description: [
      "That is the first game project that I have ever completed.",
      "",
      "The theme of the Jam was Hell and we decided to create a game about hell for dinosaurs... Now the poor dinos have to dodge asteroids for eternity",
      "",
      "🏆 Still proud of this tiny game, took 3rd place out of 56 other submissions",
    ],
    link: "https://lockd.itch.io/dinos-nightmare",
  },
  {
    img: "/WindowsTD-logo.png",
    title: "Windows Defense",
    description: [
      "Your good old Windows XP is being attacked by god knows what. Seems like even files from MacOS are here. Build towers and make sure to protect your precious computer!",
      "A tower defense game completed in a bit under 72 hours by 2 developers.",
      "",
      "🏆 #7 out of 123 entries in the enjoyment category",
    ],
    link: "https://lockd.itch.io/windows-defense",
  },
  {
    img: "/sendburg-logo.png",
    title: "Sendburg Delivery Service",
    description: [
      'Jam\'s theme was "Delivery" so we came up with a puzzle game based on one of the oldest game concepts. Take different shapes and try placing them in the box with a very odd shape.',
      "",
      "Ludum dare submission made in 48 hours by 3 developers.",
    ],
    link: "https://lockd.itch.io/sendburgdeliveryservice",
  },
  {
    img: "/gentle-ghost-logo.png",
    title: "Gentle gHost",
    description: [
      "An extremely challenging project where I was working in a team of 13 other developers, artists, and musicians.",
      "You play as a gentle ghost who is trying to help his relative and clean up the house without scaring her to death",
      'Think "Neighbor from Hell" but vice-versa and cute',
      "",
      "🏆 Was rated #198 out of 6820 other entries.",
    ],
    link: "https://ldrg.itch.io/gentleghost",
  },
];
