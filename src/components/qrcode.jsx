import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

export default function QRCodeLove() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        marginTop: "60px",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(255, 105, 135, 0.2)"
      }}
    >
      <h2 style={{ color: "#a14a68" }}>
        Scanne-moi 💌
      </h2>

      <QRCodeCanvas
        value="https://site-sv.vercel.app"
        size={200}
        bgColor="#ffffff"
        fgColor="#a14a68"
        level="H"
      />

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        Une surprise t’attend de l’autre côté 💖
      </p>
    </motion.div>
  );
}
