import React, { useState } from "react";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";

const linkIcons = {
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  paper: "https://img.icons8.com/ios-filled/50/79BAEC/document--v1.png",
  presentation: "https://img.icons8.com/ios-filled/50/79BAEC/presentation.png"
};

function mod(n, m) {
  return ((n % m) + m) % m;
}

const Book3D = ({ proj, open, onOpen }) => (
  <div className={"book3d-container" + (open ? " open" : "")}
    tabIndex={0}
    onClick={onOpen}
    onKeyDown={e => (e.key === "Enter" || e.key === " ") && onOpen()}
    aria-label={`Show details for ${proj.title}`}
    role="button"
  >
    <div className="book3d">
      <div className={"book3d-cover" + (open ? " open" : "") }>
        <span className="book3d-title">{proj.title}</span>
      </div>
      <div className={"book3d-page" + (open ? " open" : "") }>
        <div className="book3d-content">
          <div className="project-card-links">
            {proj.links && Object.entries(proj.links).map(([type, url]) => (
              <a key={type} href={url} target="_blank" rel="noopener noreferrer" title={type.charAt(0).toUpperCase() + type.slice(1)}>
                <img src={linkIcons[type] || linkIcons.github} alt={type} className="project-link-icon" />
              </a>
            ))}
          </div>
          <div className="project-card-techs">
            {proj.technologies && proj.technologies.map((tech) => (
              <span className="project-tech-chip" key={tech}>{tech}</span>
            ))}
          </div>
          <ul className="project-card-desc">
            {proj.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = projectsData.projects;
  const [start, setStart] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const CARDS_PER_VIEW = 1; // Show only 1 book at a time
  const total = projects.length;

  const prev = () => {
    setOpenIdx(null);
    setStart(s => mod(s - CARDS_PER_VIEW, total));
  };
  const next = () => {
    setOpenIdx(null);
    setStart(s => mod(s + CARDS_PER_VIEW, total));
  };

  // Get visible books, wrapping around
  const visible = [];
  for (let i = 0; i < CARDS_PER_VIEW; i++) {
    visible.push(projects[mod(start + i, total)]);
  }

  return (
    <div className="projects-section">
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Projects</h2>
      <div className="carousel-bookshelf-container">
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous">&#8592;</button>
        <div className="carousel-bookshelf">
          {visible.map((proj, idx) => (
            <Book3D
              key={proj.title + idx}
              proj={proj}
              open={openIdx === idx}
              onOpen={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
        <button className="carousel-arrow right" onClick={next} aria-label="Next">&#8594;</button>
      </div>
    </div>
  );
};

export default Projects;
