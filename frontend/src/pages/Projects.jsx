import React, { useState } from "react";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";

const Projects = () => {
  const projects = projectsData.projects;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="projects-section">
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Projects</h2>
      <div className="projects-accordion">
        {projects.map((proj, idx) => (
          <div className={`accordion-item${openIdx === idx ? " open" : ""}`} key={proj.title + idx}>
            <button
              className="accordion-header"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`accordion-content-${idx}`}
            >
              <div className="accordion-title-skills">
                <span className="accordion-title">{proj.title}</span>
                <span className="accordion-skills">
                  {proj.technologies && proj.technologies.map((tech) => (
                    <span className="project-tech-chip" key={tech}>{tech}</span>
                  ))}
                </span>
              </div>
              <span className="accordion-arrow">{openIdx === idx ? "▲" : "▼"}</span>
            </button>
            <div
              className="accordion-content"
              id={`accordion-content-${idx}`}
              style={{ maxHeight: openIdx === idx ? "500px" : "0px" }}
            >
              <ul className="project-card-desc">
                {proj.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
