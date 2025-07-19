import React, { useState } from "react";
import educationData from "../data/education.json";

const stepColor = "#79BAEC";
const stepInactive = "#eaf6ff";

const Education = () => {
  const [active, setActive] = useState(0);
  const steps = educationData.educations;
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", margin: "0 auto", padding: "32px 0" }}>
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Education</h2>
      <div style={{ width: "100%", maxWidth: 900, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Step Progress Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: 40, gap: 0 }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: idx === active ? stepColor : stepInactive,
                  border: idx === active ? `4px solid ${stepColor}` : `2px solid ${stepColor}77`,
                  boxShadow: idx === active ? `0 0 0 6px #79BAEC33` : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 20,
                  color: idx === active ? "#fff" : stepColor,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  zIndex: 2,
                  position: "relative"
                }}
                onClick={() => setActive(idx)}
                title={step.degree}
              >
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div style={{ height: 4, width: 80, background: `linear-gradient(90deg, ${stepColor} 60%, #1e3c72 100%)`, borderRadius: 2, margin: "0 -2px", zIndex: 1 }}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Details Card */}
        <div style={{ maxWidth: 700, width: "100%", background: "rgba(30, 60, 120, 0.12)", borderRadius: 24, boxShadow: "0 2px 16px 0 #79BAEC44", padding: "2rem 2.5rem", color: "#fff", margin: "0 auto", textAlign: "left" }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            🎓 {steps[active].degree.split(' in ')[0]}
          </div>
          <div style={{ fontSize: 24, color: "#e0f2ff", marginBottom: 10, fontWeight: 600 }}>
            🧑‍💻 {steps[active].degree.split(' in ')[1]}
          </div>
          <div style={{ fontSize: 20, color: "#e0f2ff", marginBottom: 6 }}>
            🏫 {steps[active].school}
          </div>
          <div style={{ fontSize: 20, color: "#e0f2ff", marginBottom: 6 }}>
            📍 {steps[active].location}
          </div>
          <div style={{ fontSize: 20, color: "#e0f2ff", marginBottom: 12 }}>
            📅 {steps[active].duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
