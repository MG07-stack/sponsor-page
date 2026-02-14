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
        margin: "-70px auto 0",
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
          transform: "translate(-50%, -60%)",
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
    style={{ marginBottom: "30px" }}
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

      <div style={frameStyle}>
        <h1 style={mainTitle}>SPONSORS</h1>

        <Section
          title="PLATINUM"
          sponsors={sponsorsData.platinum}
          columns={1}
        />

        <Section
          title="GOLD"
          sponsors={sponsorsData.gold}
          columns={2}
        />

        <Section
          title="SILVER"
          sponsors={sponsorsData.silver}
          columns={3}
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
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
    url('/backgrounds/bg.png')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  fontFamily: "'Cinzel', serif",
  position: "relative",
  overflow: "hidden"
};

const frameStyle = {
  maxWidth: "1150px",
  margin: "80px auto",
  padding: "clamp(10px, 3vw, 20px) clamp(30px, 6vw, 100px) clamp(10px, 2vw, 12px)",
  backgroundImage: "url('/big-frame.svg')",
  backgroundSize: "contain",   // ← IMPORTANT change
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top center",
  position: "relative"
};

const mainTitle = {
  textAlign: "center",
  fontSize: "clamp(28px, 6vw, 60px)",
  color: "#f5e6c8",
  marginBottom: "20px",
  letterSpacing: "5px"
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
  color: "#d4af37",
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
