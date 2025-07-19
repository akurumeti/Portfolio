import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import expData from "../data/work_experience.json";
import "../styles/ExperienceHeading.css";

const lineColor = "#79BAEC";
const stopInactive = "#e0f2ff";
const stopActive = "#79BAEC";

const Experience = () => {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
//   const maxVisible = 5;
  const showMore = expData.length > visibleCount;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h2 className="shiny-underline-heading" style={{ textAlign: "center", margin: 0, marginBottom: 32, fontSize: 40 }}>Experience</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: 400,
        width: "100%",
        position: "relative",
        flexDirection: window.innerWidth <= 600 ? "column" : "row",
        gap: window.innerWidth <= 600 ? 0 : undefined
      }}>
        {/* Metro Line */}
        <div style={{
          position: "relative",
          width: window.innerWidth <= 600 ? 40 : 60,
          minHeight: 24 + 48 * expData.slice(0, visibleCount).length,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: window.innerWidth <= 600 ? 0 : 200,
          marginTop: 0
        }}>
          <div style={{ position: "absolute", top: 40, left: 28, width: 4, height: `${48 * (expData.slice(0, visibleCount).length - 1)}px`, background: `linear-gradient(${lineColor} 60%, #1e3c72 100%)`, borderRadius: 2, zIndex: 0 }}></div>
          {expData.slice(0, visibleCount).map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              style={{
                zIndex: 2,
                margin: i === 0 ? "24px 0 0 0" : "48px 0 0 0",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => setActive(i)}
              title={exp.role + ' @ ' + exp.company}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: i === active ? stopActive : stopInactive,
                border: i === active ? `4px solid ${lineColor}` : `2px solid ${lineColor}77`,
                boxShadow: i === active ? `0 0 0 6px #79BAEC33` : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                color: i === active ? "#fff" : lineColor,
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}>{i + 1}</div>
              <div style={{ position: "absolute", left: 40, top: 6, color: lineColor, fontSize: 13, fontFamily: "'Baumans', cursive", whiteSpace: "nowrap" }}>{exp.role}</div>
            </motion.div>
          ))}
          {showMore && (
            <div
              style={{
                margin: "48px 0 0 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: lineColor,
                fontSize: 22,
                userSelect: "none"
              }}
              title="Show more experiences"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 1, expData.length))}
            >
              <span style={{ fontSize: 32, lineHeight: 1 }}>⋯</span>
              <span style={{ fontSize: 12, marginTop: 2, color: lineColor, fontFamily: "'Baumans', cursive" }}>More</span>
            </div>
          )}
        </div>
        {/* Experience Card */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", marginLeft: 0, maxWidth: 900, marginTop: 30 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: "linear-gradient(135deg, #1e3c72 0%, #79BAEC 100%)",
                borderRadius: 18,
                boxShadow: "0 2px 16px 0 rgba(121,186,236,0.10)",
                padding: "1.5rem 2rem",
                color: "#fff",
                margin: "0 0 2rem auto",
                maxWidth: 900,
                width: "100%",
                textAlign: "left",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ width: "100%", marginBottom: 8, textAlign: "left" }}>
                <span style={{ fontFamily: "'Baumans', cursive", fontSize: 22, color: "#fff", fontWeight: 700, marginRight: 0, display: "block" }}>{expData[active].role}</span>
                <span style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 19,
                  background: "linear-gradient(90deg, #79BAEC 30%, #1e3c72 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                  marginTop: 2,
                  letterSpacing: 0.5,
                  fontFamily: "'Baumans', cursive",
                  textShadow: "0 2px 8px #1e3c7240"
                }}>{expData[active].company}</span>
              </div>
              <div style={{ fontSize: 15, color: "#e0f2ff", marginBottom: 10, textAlign: "left", width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                <span role="img" aria-label="calendar">📅</span> {expData[active].month} {expData[active].year}{expData[active].endDate ? ` - ${expData[active].endDate}` : ""}
                <span role="img" aria-label="location">📍</span> {expData[active].location}
              </div>
              <ul style={{ paddingLeft: 0, margin: 0, color: "#f5faff", fontSize: 16, textAlign: "left", width: "100%", listStyle: "none" }}>
                {expData[active].description.map((desc, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                    <FaCheckCircle style={{ color: lineColor, marginRight: 10, fontSize: 16, flexShrink: 0 }} />
                    <span style={{ fontSize: 16 }}>{desc}</span>
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
