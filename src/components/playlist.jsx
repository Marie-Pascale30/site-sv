import { motion } from "framer-motion";

export default function Playlist({ spotifyLink }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2><i>Instant zouk</i> </h2>
      <p>M'accorderais-tu cette danse? 😏 <br /> Rendez-vous le 21 😉 </p>

      <div
        style={{
          maxWidth: "400px",
          margin: "40px auto 0",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          src={spotifyLink}
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </motion.section>
  );
}
        