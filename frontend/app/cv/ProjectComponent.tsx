import React from "react";
import Link from "next/link";
import { IProject } from "../utils/types";
import styles from "./projectComponentStyles.module.scss";

const ProjectComponent: React.FC<IProject> = ({
  title,
  description,
  img,
  link,
}) => {
  return (
    <Link href={link} className={styles.projectContainer}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowIcon}
      >
        <path
          d="M1 15L14 2M3 1H13.5858C14.3668 1 15 1.63317 15 2.41421V13"
          stroke="#5A85CC"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <div className={styles.projectImageContainer}>
        <img alt={title + " logo"} src={img} className={styles.projectImage} />
      </div>
      <div className={styles.projectDescriptionContainer}>
        <h2 className={styles.projectTitle}>{title}</h2>
        <p className={styles.projectDescription}>
          {description.map((text, idx) => (
            <>
              {text}
              {idx !== description.length - 1 && <br />}
            </>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default ProjectComponent;
