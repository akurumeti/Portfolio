import React, { useState } from "react";
import educationData from "../data/education.json";

const Education = () => {
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 900);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const steps = educationData.educations;
  const isMobile = windowWidth <= 600;
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', padding: isMobile ? '16px 8px' : '32px 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: isMobile ? '28px' : '36px', marginBottom: isMobile ? '24px' : '32px', fontFamily: "'Baumans', cursive", fontWeight: 'bold', position: 'relative', display: 'inline-block', margin: '0 auto 32px' }}>
        Education
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0', width: '33%', height: '4px', background: 'linear-gradient(90deg, #79BAEC, #1e3c78)', borderRadius: '2px', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)' }}></div>
      </h2>
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: isMobile ? '0 8px' : '0' }}>
        {/* Step Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: isMobile ? '24px' : '40px', gap: '0', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <button
                style={{ width: isMobile ? '36px' : '48px', height: isMobile ? '36px' : '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: isMobile ? '16px' : '20px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)', zIndex: 10, position: 'relative', background: idx === active ? '#79BAEC' : '#eaf6ff', border: idx === active ? '4px solid #79BAEC' : '2px solid rgba(121, 186, 236, 0.5)', boxShadow: idx === active ? '0 0 0 6px rgba(121, 186, 236, 0.2)' : 'none', color: idx === active ? '#fff' : '#79BAEC' }}
                onClick={() => setActive(idx)}
                title={step.degree}
              >
                {idx + 1}
              </button>
              {idx < steps.length - 1 && !isMobile && (
                <div style={{ height: '4px', width: '80px', background: 'linear-gradient(90deg, #79BAEC 60%, #1e3c72 100%)', borderRadius: '2px', margin: '0 -2px', zIndex: 1 }}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Details Card */}
        <div style={{ maxWidth: '700px', width: '100%', background: 'rgba(30, 60, 120, 0.12)', borderRadius: '24px', boxShadow: '0 2px 16px 0 rgba(121, 186, 236, 0.27)', padding: isMobile ? '1.5rem 1.2rem' : '2rem 2.5rem', color: '#fff', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ fontSize: isMobile ? '22px' : '28px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            🎓 {steps[active].degree.split(' - ')[0]}
          </div>
          <div style={{ fontSize: isMobile ? '18px' : '24px', color: '#e0f2ff', marginBottom: '10px', fontWeight: 600 }}>
            🧑‍💻 {steps[active].degree.split(' - ')[1]}
          </div>
          <div style={{ fontSize: isMobile ? '16px' : '20px', color: '#e0f2ff', marginBottom: '6px' }}>
            🏫 {steps[active].school}
          </div>
          <div style={{ fontSize: isMobile ? '16px' : '20px', color: '#e0f2ff', marginBottom: '6px' }}>
            📍 {steps[active].location}
          </div>
          <div style={{ fontSize: isMobile ? '16px' : '20px', color: '#e0f2ff', marginBottom: '12px' }}>
            📅 {steps[active].duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
