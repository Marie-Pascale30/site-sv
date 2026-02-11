import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const text = `
Mon amour ❤️

Ce site est mon cadeau pour toi.
Chaque ligne de code représente
tout ce que je ressens pour toi.

Merci d’être toi.
Je t’aime.
`;

export default function Letter() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        padding: "80px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        whiteSpace: "pre-line",
        background: "rgba(255,255,255,0.85)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      <p>{displayedText}</p>
    </motion.section>
  );
}
