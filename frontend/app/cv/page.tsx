"use client";

import Head from "next/head";
import Sidebar from "./Sidebar";
import { RESUME_SECTIONS } from "../utils/constants";
import React, { useState } from "react";
import MainContent from "./MainContent";
import styles from "./styles.module.scss";

const CV = () => {
  const [resumeSections, setResumeSections] = useState(
    RESUME_SECTIONS.map((name) => ({ name, isActive: false }))
  );

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Grigorii Pika Resume</title>
      </Head>
      <Sidebar sections={resumeSections} />
      <MainContent />
    </div>
  );
};

export default CV;
