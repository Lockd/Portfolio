import React from "react";
import styles from "./styles.module.scss";
import WorkHistory from "./WorkHistory";
import { WorkExperience, Proejcts } from "../utils/constants";
import ProjectComponent from "./ProjectComponent";

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <p className={styles.about}>
        Frontend engineer with over 4 years of experience, primarily focused on
        React and TypeScript. Currently, I lead a team of three developers
        contributing to the application's frontend and serverless components. I
        joined the project during the proof of concept phase, released the MVP
        in under two months, and now serve customers from 40 countries.
      </p>

      <h2 className={styles.sectionTitle}>Experience</h2>

      {/* TODO remove this class name if it's not used */}
      <div className={styles.experienceContainer}>
        {WorkExperience.map((experience, idx) => (
          <WorkHistory {...experience} key={idx} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Pet Projects</h2>
      {/* TODO remove this class name if it's not used */}
      <div className={styles.ProjectsContainer}>
        {Proejcts.map((project) => (
          <ProjectComponent key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
