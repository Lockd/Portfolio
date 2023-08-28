import React from "react";
import Link from "next/link";
import styles from "./workHistoryStyles.module.scss";
import { IWorkExperience } from "../utils/types";

const WorkHistory: React.FC<IWorkExperience> = ({
  companyName,
  companyLink,
  jobTitle,
  projectDescription,
  skills,
  years,
  bulletPoints,
}) => {
  const renderCompanyName = () => {
    if (companyLink) {
      return <Link href={companyLink}>{companyName}</Link>;
    }
    return <>{companyName}</>;
  };

  return (
    <div className={styles.workHistoryContainer}>
      <div className={styles.workHistoryHeaderContainer}>
        <div className={styles.workHistoryTitleContainer}>
          <p className={styles.workHistoryTitle}>
            <span className={styles.workHistoryTitleText}>{jobTitle}</span> /{" "}
            {renderCompanyName()}
          </p>
          <p className={styles.workHistoryDates}>
            {years.beginning} - {years.end}
          </p>
        </div>
        <div className={styles.workHistoryDescription}>
          {projectDescription}
        </div>
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
