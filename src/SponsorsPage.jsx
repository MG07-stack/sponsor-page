import React, { useState } from "react";
import { motion } from "framer-motion";

const sponsorsData = {
  platinum: [
    { name: "Platinum Sponsor", logo: "/logos/logo1.jpg" }
  ],
  gold: [
    { name: "Gold Sponsor", logo: "/logos/logo2.jpg" },
    { name: "Gold Sponsor", logo: "/logos/logo3.jpg" }
  ],
  silver: [
  { name: "Brand One", logo: "/logos/silver1.jpg" },
  { name: "Brand Two", logo: "/logos/silver2.png" },
  { name: "Brand Three", logo: "/logos/silver3.png" },
  { name: "Brand Four", logo: "/logos/silver4.png" },
  { name: "Brand Five", logo: "/logos/silver5.png" },
  { name: "Brand Six", logo: "/logos/silver6.png" },
  { name: "Brand Seven", logo: "/logos/silver7.png" },
  { name: "Brand Eight", logo: "/logos/silver8.png" },
  { name: "Brand Nine", logo: "/logos/silver9.png" }
]
};

  const SponsorCard = ({ sponsor, isPlatinum, isGold, isSilver }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onClick={() => setActive(!active)}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      animate={{
        scale: active ? 1.1 : 1
      }}
      style={{
  position: "relative",
  textAlign: "center"
}}
    >
      
      {/* ICON FRAME */}
      <div
  style={{
    position: "relative",
    width: isPlatinum
      ? "clamp(180px, 26vw, 280px)"
      : isGold
      ? "clamp(150px, 22vw, 210px)"
      : "clamp(130px, 18vw, 180px)",
    margin: "auto"
  }}
>

  {/* LOGO (bottom layer) */}
  <img
  src={sponsor.logo}
  alt={sponsor.name}
  style={{
    position: "absolute",
    top: "46%",   // slightly higher because of bottom ornament
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isPlatinum ? "80%" : isGold ? "78%" : "75%",
    height: isPlatinum ? "80%" : isGold ? "78%" : "75%",
    objectFit: "contain",
    zIndex: 1
  }}
/>

  {/* FRAME (top layer) */}
  <img
    src="/icon-frame.svg"
    alt="icon frame"
    style={{
      width: "100%",
      display: "block",
      position: "relative",
      zIndex: 2
    }}
  />

</div>

      {!isSilver && (
  <>
    {/* NAMEPLATE FRAME */}
    <div
      style={{
        position: "relative",
        display: "inline-block",
        margin: isPlatinum
  ? "clamp(-80px, -6vw, -60px) auto 0"
  : isGold
  ? "clamp(-55px, -5vw, -40px) auto 0"
  : "clamp(-45px, -4vw, -30px) auto 0",
        minWidth: isPlatinum
  ? "clamp(200px, 24vw, 240px)"
  : isGold
  ? "clamp(160px, 20vw, 190px)"
  : "clamp(130px, 16vw, 150px)",

maxWidth: isPlatinum
  ? "clamp(340px, 30vw, 380px)"
  : isGold
  ? "clamp(260px, 24vw, 300px)"
  : "clamp(220px, 20vw, 240px)",
      }}
    >
      <img
        src="/nameplate-frame.svg"
        alt="name frame"
        style={{ width: "100%", display: "block" }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: isPlatinum
  ? "translate(-50%, -58%)"
  : isGold
  ? "translate(-50%, -56%)"
  : "translate(-50%, -50%)",
          fontSize: isPlatinum
  ? "clamp(13px, 2.2vw, 18px)"   // larger platinum
  : isGold
  ? "clamp(12px, 2vw, 15px)"     // medium gold
  : "clamp(11px, 1.8vw, 14px)",  // silver
          letterSpacing: "1px",
          color: "#f5e6c8",
          whiteSpace: "nowrap",
          padding: "0 20px"
        }}
      >
        {sponsor.name}
      </div>
    </div>
  </>
)}

    </motion.div>
  );
};

const Section = ({ title, sponsors, columns }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{ marginBottom: "clamp(5px, 2vw, 10px)" }}
  >
    <div style={sectionHeader}>
      <div style={divider}></div>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={divider}></div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "clamp(8px, 2vw, 20px)",
        justifyItems: "center",
        width:"100%"
      }}
    >
      {sponsors.map((s, i) => (
  <SponsorCard
    key={i}
    sponsor={s}
    isPlatinum={title === "PLATINUM"}
    isSilver={title === "SILVER"}
    isGold={title === "GOLD"}
  />
))}
    </div>
  </motion.div>
);

const SponsorsPage = () => {
  return (
    <div style={pageStyle}>
      <div style={goldParticles}></div>
      <div style={fixedBackground}></div>


      <div style={frameWrapper}>

  {/* TOP CAP */}
  <img
    src="/big-frame-top.webp"
    style={{ width: "100%", display: "block" }}
    alt=""
  />

  {/* MIDDLE REPEATING SECTION */}
  <div style={frameMiddle}>

    <h1 style={mainTitle}>SPONSORS</h1>

    <Section title="PLATINUM" sponsors={sponsorsData.platinum} columns={1} />
    <Section title="GOLD" sponsors={sponsorsData.gold} columns={2} />
    <Section title="SILVER" sponsors={sponsorsData.silver} columns={3} />

  </div>

  {/* BOTTOM CAP */}
  <img
    src="/big-frame-bottom.webp"
    style={{ width: "100%", display: "block" }}
    alt=""
  />

</div>
    </div>
  );
};

export default SponsorsPage;

/* ================= STYLES ================= */

const pageStyle = {
  minHeight: "100vh",
  padding: "40px 20px",
  fontFamily: "'Cinzel', serif",
  position: "relative",
  overflow: "hidden"
};


const mainTitle = {
  textAlign: "center",
  fontSize: "clamp(28px, 6vw, 60px)",
  color: "#e6bf74",
  margin: "0 0 20px 0",
  letterSpacing: "5px",

  filter: `
    drop-shadow(0 0 6px rgba(255, 215, 120, 0.8))
    drop-shadow(0 0 18px rgba(255, 215, 120, 0.5))
    drop-shadow(0 0 35px rgba(255, 215, 120, 0.3))
  `
};

const sectionHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px",
  marginBottom: "28px" 
};

const divider = {
  flex: 1,
  height: "2px",
  background:
    "linear-gradient(to right, transparent, #d4af37, transparent)"
};

const sectionTitle = {
  fontSize: "clamp(18px, 3.5vw, 34px)",
  color: "#ddb56a",
  letterSpacing: "4px"
};



const goldParticles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "60px 60px",
  opacity: 0.05,
  pointerEvents: "none"
};

const frameWrapper = {
  maxWidth: "1150px",
  margin: "clamp(40px, 8vw, 80px) auto",
  position: "relative"
};

const frameMiddle = {
  padding: `
    clamp(5px, 6vw, 20px)
    clamp(20px, 6vw, 100px)
    clamp(20px, 8vw, 40px)
  `,
  backgroundImage: "url('/big-frame-middle.webp')",
  backgroundRepeat: "repeat-y",   // ← vertical tiling
  backgroundSize: "100% auto",    // ← width fits, height natural
  backgroundPosition: "top center"
};

const fixedBackground = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
    url('/backgrounds/bg.png')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  zIndex: -2
};