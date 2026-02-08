import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import expData from "../data/work_experience.json";

const Experience = () => {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 900);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const showMore = expData.length > visibleCount;
  const isMobile = windowWidth <= 600;
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '32px', fontFamily: "'Baumans', cursive", fontWeight: 'bold', position: 'relative', display: 'inline-block', margin: '0 auto 32px' }}>
        Experience
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0', width: '33%', height: '4px', background: 'linear-gradient(90deg, #79BAEC, #1e3c78)', borderRadius: '2px', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)' }}></div>
      </h2>
      
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: isMobile ? 'center' : 'flex-start', minHeight: isMobile ? 'auto' : '400px', position: 'relative', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '16px' : '0', padding: isMobile ? '0 8px' : '0' }}>
        {/* Timeline */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: isMobile ? '0' : '200px' }}>
          <div style={{ position: 'absolute', top: '40px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: `${48 * (expData.slice(0, visibleCount).length - 1)}px`, background: 'linear-gradient(180deg, #79BAEC 60%, #1e3c72 100%)', borderRadius: '2px', zIndex: '0' }}></div>
          
          {expData.slice(0, visibleCount).map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              style={{ zIndex: 2, margin: i === 0 ? '24px 0 0 0' : '48px 0 0 0', cursor: 'pointer', position: 'relative' }}
              onClick={() => setActive(i)}
              title={exp.role + ' @ ' + exp.company}
            >
              <div style={{ width: isMobile ? '28px' : '32px', height: isMobile ? '28px' : '32px', borderRadius: '50%', background: i === active ? '#79BAEC' : '#eaf6ff', border: i === active ? '4px solid #79BAEC' : '2px solid rgba(121, 186, 236, 0.5)', boxShadow: i === active ? '0 0 0 6px rgba(121, 186, 236, 0.2)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: isMobile ? '14px' : '16px', color: i === active ? '#fff' : '#79BAEC', transition: 'all 0.3s ease' }}>
                {i + 1}
              </div>
            </motion.div>
          ))}
          
          {showMore && (
            <div style={{ margin: '48px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', color: '#79BAEC', fontSize: '22px' }} onClick={() => setVisibleCount((prev) => Math.min(prev + 1, expData.length))} title="Show more experiences">
              <span style={{ fontSize: '32px', lineHeight: '1' }}>⋯</span>
              <span style={{ fontSize: '12px', marginTop: '2px', color: '#79BAEC', fontFamily: "'Baumans', cursive" }}>More</span>
            </div>
          )}
        </div>
        
        {/* Experience Card */}
        <div style={{ flex: 1, minWidth: '0', display: 'flex', flexDirection: 'column', maxWidth: '900px', marginTop: isMobile ? '16px' : '30px', padding: isMobile ? '0 8px' : '0', width: isMobile ? '100%' : 'auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #79BAEC 100%)', borderRadius: '18px', boxShadow: '0 2px 16px 0 rgba(121,186,236,0.10)', padding: isMobile ? '1.2rem 1.2rem' : '1.5rem 2rem', color: '#fff', maxWidth: '900px', width: '100%', textAlign: 'left' }}
            >
              <div style={{ width: '100%', marginBottom: '8px' }}>
                <h3 style={{ fontFamily: "'Baumans', cursive", fontSize: isMobile ? '18px' : '22px', color: '#fff', fontWeight: 700, display: 'block', marginRight: '0' }}>{expData[active].role}</h3>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? '15px' : '19px', background: 'linear-gradient(90deg, #79BAEC 30%, #1e3c72 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block', marginTop: '2px', letterSpacing: '0.5px', fontFamily: "'Baumans', cursive" }}>{expData[active].company}</p>
              </div>
              
              <div style={{ fontSize: isMobile ? '13px' : '15px', color: '#e0f2ff', marginBottom: '10px', textAlign: 'left', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                <span>📅</span> {expData[active].month} {expData[active].year}{expData[active].endDate ? ` - ${expData[active].endDate}` : ""}
                <span>📍</span> {expData[active].location}
              </div>
              
              <ul style={{ paddingLeft: '0', margin: '0', color: '#f5faff', fontSize: isMobile ? '14px' : '16px', textAlign: 'left', width: '100%', listStyle: 'none' }}>
                {expData[active].description.map((desc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', gap: '10px' }}>
                    <FaCheckCircle style={{ color: '#79BAEC', fontSize: isMobile ? '14px' : '16px', flexShrink: 0, marginTop: '2px' }} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Experience;
