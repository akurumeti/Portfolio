import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../styles/MainPage.module.css";

const iconStyle = {
  width: 28,
  height: 28,
  marginRight: 18,
  verticalAlign: "middle",
  color: "#ffffff",
  cursor: "pointer",
  transition: "color 0.2s"
};

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerIcons}>
        <a href="https://github.com/akurumeti" target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>
          <FaGithub style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/anurag-kurumeti/" target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="mailto:akurumeti@gmail.com" style={{ marginRight: 0 }}>
          <FaEnvelope style={iconStyle} />
        </a>
      </div>
      <span className={styles.footerCopyright}>
        © 2025 All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
