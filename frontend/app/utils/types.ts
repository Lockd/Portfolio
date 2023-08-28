export interface IWorkExperience {
  companyName: string;
  companyLink?: string;
  companyDescription?: string;
  jobTitle: string;
  projectDescription: string;
  skills: string[];
  years: {
    beginning: string;
    end: string;
  };
  bulletPoints: string[];
}

export interface IProject {
  title: string;
  img: string;
  description: string[];
  link: string;
}
