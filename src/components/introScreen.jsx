import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroScreen({ onFinish }) {
  const boyfriendName = "Maxime 😏"; // ← change ici

  const fullText = "Cette histoire n'était pas un hasard...";
  const [displayedText, setDisplayedText] = useState("");
  const [showName, setShowName] = useState(false);

  // ✨ Effet machine à écrire
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowName(true), 1000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        zIndex: 9999
      }}
    >
      <h1
        style={{
          fontWeight: "300",
          letterSpacing: "2px",
          minHeight: "40px"
        }}
      >
        {displayedText}
      </h1>

      {showName && (
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={{
            marginTop: "30px",
            fontSize: "36px",
            color: "#ff8fab",
            fontWeight: "500"
          }}
        >
          {boyfriendName} 
        </motion.h2>
      )}

      {showName && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={onFinish}
          style={{
            marginTop: "60px",
            padding: "12px 30px",
            background: "transparent",
            border: "1px solid #ff8fab",
            color: "#ff8fab",
            cursor: "pointer",
            borderRadius: "25px",
            fontSize: "14px",
            letterSpacing: "1px"
          }}
        >
          Découvrir plus
        </motion.button>
      )}
    </motion.div>
  );
}
