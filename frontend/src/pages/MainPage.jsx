import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Footer from "./Footer";
import "../App.css";
import styles from "../styles/MainPage.module.css";
import mainPageImg from "../assets/main-page-img.png";
import SkillsSection from "./SkillsSection";

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
    <div className={styles.mainBg}>
      <motion.div
        className={styles.menuBar}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <a href="#experience" className={styles.menuShiny}>Experience</a>
        <span className={styles.menuPipe}>|</span>
        <a href="#skills" className={styles.menuShiny}>Skills</a>
        <span className={styles.menuPipe}>|</span>
        <a href="#projects" className={styles.menuShiny}>Projects</a>
        <span className={styles.menuPipe}>|</span>
        <a href="#education" className={styles.menuShiny}>Education</a>
      </motion.div>
      <motion.div
        className={styles.heroContainer}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className={styles.rightHero}>
          <img
            src={mainPageImg}
            alt="Man Coding Animation"
            className={styles.codingImg}
          />
        </div>
        <div className={styles.leftHero}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {typedName}
            {!done && <span className={styles.cursor}>|</span>}
          </motion.h1>
          <motion.h2
            className={styles.subheading}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Backend Developer
          </motion.h2>
        </div>
      </motion.div>
      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
