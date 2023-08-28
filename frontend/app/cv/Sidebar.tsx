import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ISidebar {
  sections: {
    name: string;
    isActive: boolean;
  }[];
}

const Sidebar: React.FC<ISidebar> = ({ sections }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.personalInfo}>
        <div className={styles.photoContainer}>
          <Image
            width={175}
            height={175}
            src="/profile-image.jpg"
            alt="Grigorii Pika"
            className={styles.photo}
          />
        </div>
        <div className={styles.personalInfoText}>
          <h1 className={styles.personalInfoTitle}>Grigorii Pika</h1>
          <p className={styles.personalInfoJobTitle}>Frontend Engineer</p>
          <p className={styles.personalInfoDescription}>
            {/* TODO think of a text for this place */}I enjoy creating clean,
            fast, and accessible user interfaces while helping businesses to
            deliver the best possible user experiences
          </p>
        </div>
      </div>
      <nav className={styles.navigation}>
        {sections.map((section) => (
          <div className={styles.navigationSectionContainer} key={section.name}>
            <div className={styles.navigationDecorative} />
            <div className={styles.navigationSectionName}>{section.name}</div>
          </div>
        ))}
      </nav>
      <div className={styles.buttonsContainer}>
        <Link
          className={styles.ctaButton}
          href="https://www.linkedin.com/in/grigorii-pika/"
        >
          <Image width={30} height={30} src="/linkedin.svg" alt="Linkedin" />
        </Link>
        <Link className={styles.ctaButton} href="https://github.com/Lockd">
          <Image width={30} height={30} src="/github.svg" alt="Github" />
        </Link>
        <Link className={styles.ctaButton} href="mailto:pikagrigoriy@gmail.com">
          <Image width={30} height={30} src="/email.svg" alt="Email" />
        </Link>
        <a
          className={styles.downloadResume}
          href="/Grigorii-Pika_Frontend-Engineer_Resume.pdf"
          download="Grigorii-Pika_Frontend-Engineer_Resume.pdf"
        >
          Print resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
