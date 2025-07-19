import React, { useState } from "react";
import skillsData from "../data/skills.json";
import "../styles/Skills.css";

// Only skills present in skills.json
const skillIcons = {
  // Dev Languages
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Groovy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg", // updated to devicon
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Scala": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  // Java Technologies
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring MVC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Hibernate": "https://img.icons8.com/color/48/000000/hibernate.png", // fallback icon
  "JDBC": "https://img.icons8.com/ios-filled/50/79BAEC/database.png", // generic DB icon
  // Databases
  "Oracle PL/SQL": "https://img.icons8.com/color/48/000000/oracle-logo.png",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Cassandra": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", // updated to devicon
  // Devops Tools
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  // Operating Systems
  "Windows": "https://img.icons8.com/color/48/000000/windows-10.png",
  "Mac": "https://img.icons8.com/color/48/000000/mac-os.png"
};

function SkillsCircle({ skills, category }) {
  const count = skills.length;
  const circleSize = 420; // px, increased size
  const iconBox = 80; // px, increased icon size
  const center = circleSize / 2;
  // Dynamic radius: more skills = larger radius, fewer = smaller
  const minRadius = 140;
  const maxRadius = center - iconBox / 2 - 12;
  const dynamicRadius = Math.max(
    minRadius,
    Math.min(maxRadius, center - iconBox / 2 - 12 - (count < 6 ? 24 : 0))
  );
  return (
    <div className="skills-circle-wrapper">
      <div className="skills-circle" style={{ width: circleSize, height: circleSize, position: "relative" }}>
        {/* Category title in the center */}
        <div className="skills-circle-title-center">{category}</div>
        {skills.map((skill, idx) => {
          const angle = (2 * Math.PI * idx) / count - Math.PI / 2; // start from top
          const x = center + dynamicRadius * Math.cos(angle) - iconBox / 2;
          const y = center + dynamicRadius * Math.sin(angle) - iconBox / 2;
          return (
            <div
              className="skill-icon-circle-nobox"
              key={skill}
              style={{ position: "absolute", left: x, top: y, width: iconBox, height: iconBox, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={skillIcons[skill] || "https://img.icons8.com/ios-filled/50/79BAEC/question-mark.png"}
                alt={skill}
                title={skill}
                className="skill-logo-img"
                style={{ width: 56, height: 56, marginBottom: 4 }} // increased icon size
              />
              <span className="skill-label skill-label-circle" style={{ fontSize: 20, textAlign: "center", wordBreak: "break-word", whiteSpace: "normal", lineHeight: 1.2, maxWidth: 110, overflowWrap: "break-word" }}>
                {skill}
              </span>
            </div>
          );
        })}
        <div className="skills-circular-center-glow"></div>
      </div>
    </div>
  );
}

function SkillsCarousel({ categories }) {
  // Responsive: 2 on desktop/tablet, 1 on mobile
  const getCardsPerView = () => (window.innerWidth < 700 ? 1 : 2);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const [index, setIndex] = useState(0);
  const total = categories.length;

  React.useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Infinite carousel logic
  const prev = () => setIndex((i) => (i - cardsPerView + total) % total);
  const next = () => setIndex((i) => (i + cardsPerView) % total);

  // Get visible cards, wrapping around
  const visible = [];
  for (let i = 0; i < cardsPerView; i++) {
    visible.push(categories[(index + i) % total]);
  }

  return (
    <div className="skills-carousel-container">
      <button className="carousel-arrow left" onClick={prev} aria-label="Previous">
        &#8592;
      </button>
      <div className="skills-carousel-track-multi">
        {visible.map((cat) => (
          <SkillsCircle
            key={cat.name}
            skills={cat.skills}
            category={cat.name}
          />
        ))}
      </div>
      <button className="carousel-arrow right" onClick={next} aria-label="Next">
        &#8594;
      </button>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-section-circles">
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Skills</h2>
      <SkillsCarousel categories={skillsData.categories} />
    </div>
  );
}

export default Skills;
