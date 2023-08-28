import React from "react";
import styles from "./styles.module.scss";
import WorkHistory from "./WorkHistory";
import { WorkExperience, Proejcts } from "../utils/constants";
import ProjectComponent from "./ProjectComponent";

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <p className={styles.about}>
        Frontend engineer primarily focused on React and TypeScript. Currently,
        I lead a small team of developers contributing to the application's
        frontend and serverless parts. I have experience with CI/CD, Test-Driven
        development, and mentoring.
        <br />
        <br />
        During my free time, I enjoy game development and hiking. During my free
        time, I enjoy game development and hiking. During my free time, I enjoy
        game development and hiking
      </p>

      <h2 className={styles.sectionTitle}>Experience</h2>

      <div className={styles.experienceContainer}>
        {WorkExperience.map((experience, idx) => (
          <WorkHistory {...experience} key={idx} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.ProjectsContainer}>
        {Proejcts.map((project) => (
          <ProjectComponent key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
