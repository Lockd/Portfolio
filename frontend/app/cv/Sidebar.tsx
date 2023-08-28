import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ISidebar {
  sections: {
    name: string;
    isActive: boolean;
  }[];
}

const Sidebar: React.FC<ISidebar> = ({ sections }) => {
  const getActiveClassName = (isActive: boolean, baseClassName: string) => {
    return baseClassName + (isActive ? `${baseClassName}--active` : "");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.personalInfo}>
        <div className={styles.photoContainer}>
          <img
            src="/profile-image.jpg"
            alt="Grigorii Pika"
            className={styles.photo}
          />
        </div>
        <div className={styles.personalInfoText}>
          <h1 className={styles.personalInfoTitle}>Grigorii Pika</h1>
          <p className={styles.personalInfoJobTitle}>
            Senior Frontend Engineer at EPAM Systems
          </p>
          <p className={styles.personalInfoDescription}>
            {/* TODO add propper text here */}I Enjoy doing different code
            related stuff, wow
          </p>
        </div>
      </div>
      <nav className={styles.navigation}>
        {sections.map((section) => (
          <div className={styles.navigationSectionContainer} key={section.name}>
            <div
              // TODO make this work pls
              className={getActiveClassName(
                section.isActive,
                "section-container__decorative-element"
              )}
            />
            <div className={styles.navigationSectionName}>{section.name}</div>
          </div>
        ))}
      </nav>
      {/* TODO add all the links and icons*/}
      <div className={styles.buttonsContainer}>
        <Link
          className={styles.ctaButton}
          href="https://www.linkedin.com/in/grigorii-pika/"
        >
          <img src="/linkedin.svg" alt="Linkedin" />
        </Link>
        <Link className={styles.ctaButton} href="https://github.com/Lockd">
          <img src="/github.svg" alt="Github" />
        </Link>
        <Link className={styles.ctaButton} href="mailto:pikagrigoriy@gmail.com">
          <img src="/email.svg" alt="Email" />
        </Link>
        <Link
          className={styles.downloadResume}
          href="/Grigorii-Pika_Frontend-Engineer_Resume.pdf"
          download
        >
          Print resume
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
