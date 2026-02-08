import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import mainPageImg from "../assets/main-page-img.png";
import Skills from "./Skills";

const menuVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

const NAME = "Anurag Kurumeti";

const MainPage = () => {
  const [typedName, setTypedName] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(NAME.slice(0, i + 1));
      i++;
      if (i === NAME.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Menu */}
      <motion.div
        className="navbar"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <a href="#experience">Experience</a>
        <span>|</span>
        <a href="#skills">Skills</a>
        <span>|</span>
        <a href="#projects">Projects</a>
        <span>|</span>
        <a href="#education">Education</a>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="hero"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div style={{ flexShrink: 0 }}>
          <img
            src={mainPageImg}
            alt="Man Coding Animation"
            style={{ width: '100%', maxWidth: '320px', height: 'auto' }}
          />
        </div>
        <div className="hero-text">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {typedName}
            {!done && <span style={{ color: 'var(--primary)' }}>|</span>}
          </motion.h1>
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Backend Developer
          </motion.h2>
        </div>
      </motion.div>

      {/* Sections */}
      <section id="experience" style={{ width: '100%', padding: '32px 16px' }}>
        <Experience />
      </section>

      <section id="skills" style={{ width: '100%', padding: '32px 16px' }}>
        <Skills />
      </section>

      <section id="projects" style={{ width: '100%', padding: '32px 16px' }}>
        <Projects />
      </section>

      <section id="education" style={{ width: '100%', padding: '32px 16px' }}>
        <Education />
      </section>

      <Footer />
    </div>
  );
};

export default MainPage;
