import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '8px' : '16px', padding: isMobile ? '8px 4px' : '24px 48px', color: 'white', borderTop: '1px solid rgba(121, 186, 236, 0.3)',   background: 'linear-gradient(90deg, var(--bg-blue), var(--primary), var(--bg-blue))' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '16px' : '24px' }}>
        <a 
          href="https://github.com/akurumeti" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub"
          style={{ cursor: 'pointer', color: 'white', transition: 'color 0.3s', fontSize: isMobile ? '24px' : '30px' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#79BAEC'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/anurag-kurumeti/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
          style={{ cursor: 'pointer', color: 'white', transition: 'color 0.3s', fontSize: isMobile ? '24px' : '30px' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#79BAEC'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaLinkedin />
        </a>
        <a 
          href="mailto:akurumeti@gmail.com" 
          title="Email"
          style={{ cursor: 'pointer', color: 'white', transition: 'color 0.3s', fontSize: isMobile ? '24px' : '30px' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#79BAEC'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          <FaEnvelope />
        </a>
      </div>
      <span style={{ textAlign: 'center', fontFamily: "'Baumans', cursive", fontSize: isMobile ? '12px' : '14px' }}>
        © 2026 All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
