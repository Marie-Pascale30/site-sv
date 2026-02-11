import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#2b2b2b",
      }}
    >
      <div>
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <i style={italic}>
            Joyeuse Saint-Valentin ❤️
          </i>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Ce site est codé avec amour… et React 💻💕
        </motion.p>
      </div>
    </motion.section>
  );
}


/* STYLES */
const italic = {
  fontFamily: "popins, sans-serif"

};