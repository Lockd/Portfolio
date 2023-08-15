import React from "react";
import Link from "next/link";

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
    <div className="sidebar">
      <div className="sidebar__personal-info personal-info">
        <img src="" alt="Grigorii Pika" className="personal-info__photo" />
        <div className="personal-info__text">
          <h1 className="peronal-info__title">Grigorii Pika</h1>
          <p className="personal-info__job-title">
            Senior Frontend Engineer at EPAM Systems
          </p>
          <p className="personal-info__short-description">
            {/* TODO add propper text here */}I Enjoy doing different code
            related stuff, wow
          </p>
        </div>
      </div>
      <nav className="sidebar__navigation navigation">
        {sections.map((section) => (
          <div
            className="navtion__section-container section-container"
            key={section.name}
          >
            <div
              className={getActiveClassName(
                section.isActive,
                "section-container__decorative-element"
              )}
            />
            <div className="navigation__section-name">{section.name}</div>
          </div>
        ))}
      </nav>
      {/* TODO add all the links and icons*/}
      <div className="cta-buttons">
        <Link
          className="button button--small"
          href="https://www.linkedin.com/in/grigorii-pika/"
        >
          Linkedin
        </Link>
        <Link className="button button--small" href="https://t.me/Larssp">
          tg
        </Link>
        <Link className="button button--small" href="https://github.com/Lockd">
          github
        </Link>
        {/* TODO change email whenever I buy domain and set it up */}
        <Link
          className="button button--small"
          href="mailto:pikagrigoriy@gmail.com"
        >
          email
        </Link>
        {/* TODO make this button download resume file */}
        <Link className="button button--small" href="">
          resume
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
