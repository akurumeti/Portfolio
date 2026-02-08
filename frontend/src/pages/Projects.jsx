import React, { useState } from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
  const projects = projectsData.projects;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '32px', fontFamily: "'Baumans', cursive", fontWeight: 'bold', position: 'relative', display: 'inline-block', margin: '0 auto 32px' }}>
        Projects
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0', width: '33%', height: '4px', background: 'linear-gradient(90deg, #79BAEC, #1e3c78)', borderRadius: '2px', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)' }}></div>
      </h2>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {projects.map((proj, idx) => (
          <div 
            style={{ background: 'rgba(121, 186, 236, 0.1)', border: '1px solid rgba(121, 186, 236, 0.3)', borderRadius: '8px', overflow: 'hidden', transition: 'all 0.3s' }}
            key={proj.title + idx}
          >
            <button
              style={{ width: '100%', padding: '16px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(121, 186, 236, 0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-expanded={openIdx === idx}
              aria-controls={`accordion-content-${idx}`}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#79BAEC', fontFamily: "'Baumans', cursive", margin: 0 }}>{proj.title}</h3>
                  {proj.duration && <span style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', background: '#79BAEC', padding: '4px 12px', borderRadius: '20px', width: 'fit-content' }}>{proj.duration}</span>}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {proj.technologies && proj.technologies.map((tech) => (
                    <span 
                      style={{ fontSize: '12px', background: '#79BAEC', color: 'white', padding: '4px 12px', borderRadius: '4px', fontWeight: 500 }}
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span style={{ color: '#79BAEC', fontSize: '18px', flexShrink: 0, transition: 'transform 0.3s', transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0)' }}>
                ▼
              </span>
            </button>
            <div
              id={`accordion-content-${idx}`}
              style={{ overflow: 'hidden', maxHeight: openIdx === idx ? '384px' : '0px', transition: 'max-height 0.3s ease-in-out' }}
            >
              <ul style={{ padding: '16px 24px', margin: 0, fontSize: '18px', color: '#e0f2ff', lineHeight: '1.6', listStyleType: 'disc', paddingLeft: '32px', backgroundColor: 'rgba(30, 60, 120, 0.08)' }}>
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
