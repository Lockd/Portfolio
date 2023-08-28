import React from "react";
import styles from "./styles.module.scss";
import WorkHistory from "./WorkHistory";
import { WorkExperience, Projects } from "../utils/constants";
import ProjectComponent from "./ProjectComponent";

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <p className={styles.about}>
        Frontend engineer with over 4 years of experience, primarily focused on
        React and TypeScript. Currently, I lead a team of three developers
        contributing to the application&apos;s frontend and serverless
        components. I joined the project during the proof of concept phase,
        released the MVP in under two months, and now serve customers from 40
        countries.
        <br />
        <br />
        {/* TODO add link to pet projects section */}
        Aside from my day job I genuinely enjoy working with code and building
        pet projects. Somewhere in 2022 I got into game development, since then
        I took part in in 5 game jams.
      </p>

      <h2 className={styles.sectionTitle}>Experience</h2>

      <div className={styles.experienceContainer} id="work-experience">
        {WorkExperience.map((experience, idx) => (
          <WorkHistory {...experience} key={idx} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Pet Projects</h2>
      <div className={styles.ProjectsContainer} id="pet-projects">
        {Projects.map((project) => (
          <ProjectComponent key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
