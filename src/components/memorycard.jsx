import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MemoryCard({ image, defaultText, id }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [memoryText, setMemoryText] = useState("");
  const [memoryDate, setMemoryDate] = useState("");
  const [memoryEmotion, setMemoryEmotion] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Texte animé
  const [animatedText, setAnimatedText] = useState("");

  // Charger le souvenir existant
  useEffect(() => {
    const saved = localStorage.getItem(`memory-${id}`);
    if (saved) {
      const data = JSON.parse(saved);
      setMemoryText(data.text || "");
      setMemoryDate(data.date || "");
      setMemoryEmotion(data.emotion || "");
    } else {
      setMemoryText(defaultText || "");
    }
  }, [id, defaultText]);

  // Sauvegarde automatique + feedback
  useEffect(() => {
    const data = { text: memoryText, date: memoryDate, emotion: memoryEmotion };
    localStorage.setItem(`memory-${id}`, JSON.stringify(data));

    if (memoryText || memoryDate || memoryEmotion) {
      setIsSaved(true);
      const timer = setTimeout(() => setIsSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [memoryText, memoryDate, memoryEmotion, id]);

  // Animation d’écriture (lecture uniquement)
  useEffect(() => {
    if (!isEditing) {
      setAnimatedText(""); // reset
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedText((prev) => prev + (memoryText[index] || ""));
        index++;
        if (index > memoryText.length) clearInterval(interval);
      }, 50); // vitesse : 30ms par lettre
      return () => clearInterval(interval);
    } else {
      setAnimatedText(memoryText); // édition = tout afficher
    }
  }, [isEditing, memoryText]);

  return (
    <div style={scene} onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={card}
      >
        {/* FACE AVANT */}
        <div style={{ ...face, ...front }}>
          <img src={image} alt="souvenir" style={imageStyle} />
        </div>

        {/* FACE ARRIÈRE */}
        <div style={{ ...face, ...back }}>
          <button
            style={backButton}
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ↩ Retour à la photo
          </button>

          <button
            style={editButton}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Terminé" : "Éditer"}
          </button>

          {isEditing ? (
            <>
              <textarea
                value={memoryText}
                onChange={(e) => setMemoryText(e.target.value)}
                placeholder="Écris ici le souvenir que ce moment te rappelle…"
                style={textareaStyle}
                onClick={(e) => e.stopPropagation()}
              />

              <input
                type="date"
                value={memoryDate}
                onChange={(e) => setMemoryDate(e.target.value)}
                style={inputStyle}
                onClick={(e) => e.stopPropagation()}
              />

              <input
                type="text"
                value={memoryEmotion}
                onChange={(e) => setMemoryEmotion(e.target.value)}
                placeholder="Ce que tu as ressenti..."
                style={inputStyle}
                onClick={(e) => e.stopPropagation()}
              />
            </>
          ) : (
            <>
              <p style={textStyle}>{animatedText || "Aucun souvenir pour le moment..."}</p>
              {memoryDate && <p style={dateStyle}>📅 {memoryDate}</p>}
              {memoryEmotion && <p style={emotionStyle}>💗 {memoryEmotion}</p>}
            </>
          )}

          {isSaved && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={savedMessage}
            >
               Souvenir sauvegardé dnas nos cœurs 💖
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* =======================
   STYLES
======================= */

const scene = { width: "260px", height: "320px", perspective: "1200px", cursor: "pointer" };
const card = { width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" };
const face = { position: "absolute", width: "100%", height: "100%", backfaceVisibility: "hidden", borderRadius: "16px", boxShadow: "0 15px 30px rgba(0,0,0,0.2)" };
const front = { background: "#fff" };
const back = {
  background: "linear-gradient(135deg, #ffe6f0, #ffc2d1)",
  transform: "rotateY(180deg)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  fontFamily: "'Georgia', serif",
  textAlign: "center",
};
const imageStyle = { width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" };
const textareaStyle = { width: "100%", height: "80px", background: "transparent", border: "1px solid #a14a68", borderRadius: "8px", resize: "none", outline: "none", fontFamily: "'Georgia', serif", fontSize: "14px", lineHeight: "1.5", textAlign: "center", color: "#4a2c2a", padding: "6px", marginTop: "8px" };
const inputStyle = { width: "100%", padding: "6px", marginTop: "6px", borderRadius: "8px", border: "1px solid #a14a68", fontSize: "14px", fontFamily: "'Georgia', serif" ,outline: "none", textAlign: "center", color: "#4a2c2a" ,background: "transparent" };
const textStyle = { fontFamily: "'Georgia', serif", fontSize: "14px", color: "#4a2c2a", marginTop: "8px" };
const dateStyle = { fontFamily: "'Georgia', serif", fontSize: "12px", color: "#4a2c2a", marginTop: "4px" };
const emotionStyle = { fontFamily: "'Georgia', serif", fontSize: "12px", color: "#a14a68", marginTop: "4px", fontStyle: "italic" };
const backButton = { background: "none", border: "none", color: "#a14a68", fontSize: "14px", marginBottom: "6px", cursor: "pointer", fontStyle: "italic" };
const editButton = { background: "none", border: "none", color: "#4a2c68", fontSize: "14px", marginBottom: "6px", cursor: "pointer" };
const savedMessage = { position: "absolute", bottom: "10px", fontSize: "12px", color: "#4a2c2a", fontStyle: "italic" };
