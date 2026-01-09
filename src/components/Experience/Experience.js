import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Experience.css";

import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const { theme } = useContext(ThemeContext);
  const handleCompanyOnClick = (redirectionUrl) => {
    if (redirectionUrl) {
      window.open(redirectionUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={theme.expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              imageUrl={exp.imageUrl}
              endYear={exp.endYear}
              onClick={() => handleCompanyOnClick(exp.companyUrl)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
