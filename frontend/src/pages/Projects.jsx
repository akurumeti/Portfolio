import React, { useState } from "react";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";

const CARDS_PER_VIEW = 3;

function ProjectsCarousel({ projects }) {
  const [start, setStart] = useState(0);
  const total = projects.length;
  const canPrev = start > 0;
  const canNext = start + CARDS_PER_VIEW < total;

  const prev = () => setStart((s) => Math.max(0, s - CARDS_PER_VIEW));
  const next = () => setStart((s) => Math.min(total - CARDS_PER_VIEW, s + CARDS_PER_VIEW));

  return (
    <div className="projects-carousel-container">
      <button className="carousel-arrow left" onClick={prev} disabled={!canPrev} aria-label="Previous">&#8592;</button>
      <div className="projects-carousel-track">
        {projects.slice(start, start + CARDS_PER_VIEW).map((proj, idx) => (
          <div className="project-card-glass" key={proj.id || idx}>
            <img src={proj.image} alt={proj.title} className="project-card-img" />
            <div className="project-card-content">
              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.description}</p>
              {proj.link && <a href={proj.link} className="project-card-link" target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={next} disabled={!canNext} aria-label="Next">&#8594;</button>
    </div>
  );
}

const Projects = () => (
  <div className="projects-section">
    <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Projects</h2>
    <ProjectsCarousel projects={projectsData.projects} />
  </div>
);

export default Projects;
