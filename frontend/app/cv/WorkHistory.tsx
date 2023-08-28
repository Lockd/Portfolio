import React from "react";
import styles from "./workHistoryStyles.module.scss";
import { IWorkExperience } from "../utils/types";

const WorkHistory: React.FC<IWorkExperience> = ({
  companyName,
  jobTitle,
  projectDescription,
  skills,
  years,
  bulletPoints,
}) => {
  return (
    <div className={styles.workHistoryContainer}>
      <div className={styles.workHistoryTitleCotnainer}>
        <p className={styles.workHistoryTitle}>
          {jobTitle} / {companyName}
        </p>
        <p className={styles.workHistoryDates}>
          {years.begining} - {years.end}
        </p>
      </div>
      <div className={styles.workHistoryDescription}>
        Project: {projectDescription}
      </div>
      <ul className={styles.workHistoryBullets}>
        {bulletPoints.map((point, idx) => (
          <li className={styles.workHistoryBullet} key={idx}>
            {point}
          </li>
        ))}
      </ul>
      <div className={styles.skillsContainer}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
