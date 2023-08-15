import CVLayout from "../../components/layouts/cv";
import Head from "next/head";
import Sidebar from "./Sidebar";
import { RESUME_SECTIONS } from "../../utils/constants";
import React, { useState } from "react";
import MainContent from "./MainContent";

const CV = () => {
  const [resumeSections, setResumeSections] = useState(
    RESUME_SECTIONS.map((name) => ({ name, isActive: false }))
  );

  return (
    <CVLayout>
      <Head>
        <title>Grigorii Pika Resume</title>
      </Head>
      <Sidebar sections={resumeSections} />
      <MainContent />
    </CVLayout>
  );
};

export default CV;
