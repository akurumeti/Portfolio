import React, { useState } from "react";
import skillsData from "../data/skills.json";
import "../styles/SkillsSection.css";

// A mapping of skill names to icon URLs (official or CDN links, or local assets if available)
const skillIcons = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
//   "Responsive Design": "h ttps://img.icons8.com/ios-filled/50/79BAEC/responsive.png",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
//   "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "RESTful APIs": "https://img.icons8.com/ios-filled/50/79BAEC/api-settings.png",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "IBM Db2": "https://img.icons8.com/color/48/000000/ibm.png",
  "SQLAlchemy": "https://img.icons8.com/ios-filled/50/79BAEC/database.png",
  "Database Design": "https://img.icons8.com/ios-filled/50/79BAEC/data-configuration.png",
  "Red Hat OpenShift": "https://img.icons8.com/color/48/000000/openshift.png",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Concourse": "https://img.icons8.com/color/48/000000/concourse-ci.png",
  "Bitbucket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "Playwright": "https://img.icons8.com/ios-filled/50/79BAEC/play.png",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "PyCharm": "https://img.icons8.com/color/48/000000/pycharm.png",
  "IntelliJ": "https://img.icons8.com/color/48/000000/intellij-idea.png",
//   "CI/CD": "https://img.icons8.com/ios-filled/50/79BAEC/continuous-integration.png",
//   "OpenAI API Integration": "https://img.icons8.com/color/48/000000/openai.png",
  "Google Gemini API Integration": "https://img.icons8.com/color/48/000000/google-logo.png",
  "GitHub Copilot": "https://img.icons8.com/color/48/000000/github.png",
  "LangGraph": "https://img.icons8.com/ios-filled/50/79BAEC/graph.png",
  "AI-Enhanced Features": "https://img.icons8.com/ios-filled/50/79BAEC/artificial-intelligence.png",
  "Prompt Engineering": "https://img.icons8.com/ios-filled/50/79BAEC/idea.png",
//   "Agile Development": "https://img.icons8.com/ios-filled/50/79BAEC/agile.png",
  "Blockchain": "https://img.icons8.com/ios-filled/50/79BAEC/blockchain-technology.png",
  "Scala": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  "UI/UX Design": "https://img.icons8.com/ios-filled/50/79BAEC/design.png",
  "System Design": "https://img.icons8.com/ios-filled/50/79BAEC/system-task.png"
};

function SkillsCircle({ skills, category }) {
  const count = skills.length;
  const circleSize = 380; // px, increased size
  const iconBox = 64; // px, matches CSS
  const center = circleSize / 2;
  // Dynamic radius: more skills = larger radius, fewer = smaller
  const minRadius = 120;
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
              style={{ position: "absolute", left: x, top: y, width: iconBox, height: iconBox }}
            >
              <img
                src={skillIcons[skill] || "https://img.icons8.com/ios-filled/50/79BAEC/question-mark.png"}
                alt={skill}
                title={skill}
                className="skill-logo-img"
              />
              <span className="skill-label skill-label-circle">{skill}</span>
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

function SkillsSection() {
  return (
    <div className="skills-section-circles">
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", fontSize: 36, marginBottom: 32 }}>Skills</h2>
      <SkillsCarousel categories={skillsData.categories} />
    </div>
  );
}

export default SkillsSection;
