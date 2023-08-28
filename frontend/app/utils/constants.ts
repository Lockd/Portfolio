import { IProject, IWorkExperience } from "./types";

export const RESUME_SECTIONS = ["About", "Experience", "Projects"];

// TODO add propper experience texts
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
      begining: "June 2021",
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
      begining: "October 2020",
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
      begining: "October 2020",
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

export const Proejcts: IProject[] = [
  {
    img: "/dinos-nigthmare.png",
    title: "Dino's nightmare",
    description: [
      "A project from my first game jam completed in under 72 hours.",
      "The theme was hell, so now poor little dinosaurs have to dodge asteroids for eternity",
    ],
  },
];
