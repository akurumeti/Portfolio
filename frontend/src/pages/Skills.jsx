import React, { useState } from "react";
import skillsData from "../data/skills.json";

// Only skills present in skills.json
const skillIcons = {
  // Dev Languages
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Groovy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Scala": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  // Frameworks
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring MVC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Hibernate": "https://img.icons8.com/color/48/000000/hibernate.png",
  "JDBC": "https://img.icons8.com/ios-filled/50/79BAEC/database.png",
  "JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Cucumber": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg",
  "JUnit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg",
  "Mockito": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  // Databases
  "Oracle PL/SQL": "https://img.icons8.com/color/48/000000/oracle-logo.png",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Cassandra": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  // Distributed Systems
  "REST": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Apache Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Event-Driven Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  // Monitoring & Observability
  "Prometheus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  "Grafana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  "Splunk": "https://img.icons8.com/color/48/000000/splunk.png",
  // Development Tools
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  "SonarQube": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-plain.svg",
  "Gradle": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg",
  "IntelliJ IDEA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-plain.svg",
  "GitHub Copilot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  // Operating Systems
  "Windows": "https://img.icons8.com/color/48/000000/windows-10.png",
  "Mac": "https://img.icons8.com/color/48/000000/mac-os.png"
};

function SkillsCircle({ skills, category }) {
  const count = skills.length;
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
  let circleSize, iconBox, labelFont, labelMaxWidth;
  
  if (screenWidth < 600) {
    circleSize = screenWidth * 0.72;
    iconBox = 24;
    labelFont = 12;
    labelMaxWidth = 35;
  } else if (screenWidth < 900) {
    circleSize = 380;
    iconBox = 50;
    labelFont = 13;
    labelMaxWidth = 80;
  } else {
    circleSize = 420;
    iconBox = 60;
    labelFont = 14;
    labelMaxWidth = 90;
  }
  const center = circleSize / 2;
  const minRadius = screenWidth < 600 ? 18 : 110;
  const maxRadius = center - iconBox / 2 - 8;
  const dynamicRadius = Math.max(
    minRadius,
    Math.min(maxRadius, center - iconBox / 2 - 8 - (count < 6 ? 12 : 0))
  );
  return (
    <div style={{ overflow: screenWidth < 600 ? 'hidden' : 'visible' }}>
      <div style={{ position: 'relative', width: circleSize, height: circleSize, overflow: screenWidth < 600 ? 'hidden' : undefined }}>
        <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: "'Baumans', cursive", fontSize: screenWidth < 600 ? '18px' : '24px', fontWeight: 'bold', color: '#79BAEC' }}>
          {category}
        </div>
        {skills.map((skill, idx) => {
          const angle = (2 * Math.PI * idx) / count - Math.PI / 2;
          const x = center + dynamicRadius * Math.cos(angle) - iconBox / 2;
          const y = center + dynamicRadius * Math.sin(angle) - iconBox / 2;
          return (
            <div
              key={skill}
              style={{ position: 'absolute', left: x, top: y, width: iconBox, height: iconBox, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src={skillIcons[skill] || "https://img.icons8.com/ios-filled/50/79BAEC/question-mark.png"}
                alt={skill}
                title={skill}
                style={{ width: iconBox - 4, height: iconBox - 4, marginBottom: '2px', transition: 'transform 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <span style={{ fontSize: labelFont, textAlign: 'center', wordBreak: 'break-word', whiteSpace: 'normal', lineHeight: 1.2, maxWidth: labelMaxWidth, overflowWrap: 'break-word', color: '#79BAEC' }}>
                {skill}
              </span>
            </div>
          );
        })}
        <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ width: screenWidth < 600 ? '96px' : '128px', height: screenWidth < 600 ? '96px' : '128px', borderRadius: '50%', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)', opacity: 0.3 }}></div>
        </div>
      </div>
    </div>
  );
}

function SkillsCarousel({ categories }) {
  const [cardsPerView, setCardsPerView] = useState(() => window.innerWidth < 700 ? 1 : 2);
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 800);
  const total = categories.length;

  React.useEffect(() => {
    const onResize = () => {
      setScreenWidth(window.innerWidth);
      setCardsPerView(window.innerWidth < 700 ? 1 : 2);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);
  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prev = () => setIndex((i) => (i - cardsPerView + total) % total);
  const next = () => setIndex((i) => (i + cardsPerView) % total);

  const visible = [];
  for (let i = 0; i < cardsPerView; i++) {
    visible.push(categories[(index + i) % total]);
  }

  const showArrows = screenWidth >= 600;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '200px', padding: '0 16px', width: '100%' }}>
      {showArrows && (
        <button 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: '#79BAEC', color: 'white', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}
          onClick={prev}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e3c78'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#79BAEC'}
          aria-label="Previous"
        >
          &#8592;
        </button>
      )}
      <div 
        style={{ display: 'flex', gap: '80px', justifyContent: 'center', touchAction: 'pan-y' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {visible.map((cat) => (
          <div key={cat.name} style={{ flexShrink: 0 }}>
            <SkillsCircle
              skills={cat.skills}
              category={cat.name}
            />
          </div>
        ))}
      </div>
      {showArrows && (
        <button 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: '#79BAEC', color: 'white', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}
          onClick={next}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e3c78'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#79BAEC'}
          aria-label="Next"
        >
          &#8594;
        </button>
      )}
    </div>
  );
}

function Skills() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.03)', padding: '32px 0', opacity: 0.95 }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '32px', fontFamily: "'Baumans', cursive", fontWeight: 'bold', position: 'relative', display: 'inline-block', margin: '0 auto 32px', paddingLeft: '16px', paddingRight: '16px' }}>
        Skills
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0', width: '33%', height: '4px', background: 'linear-gradient(90deg, #79BAEC, #1e3c78)', borderRadius: '2px', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)' }}></div>
      </h2>
      <SkillsCarousel categories={skillsData.categories} />
    </div>
  );
}

export default Skills;
