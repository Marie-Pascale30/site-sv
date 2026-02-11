import { motion } from "framer-motion";
import { memories } from "../data/memories";

export default function Memories() {
  return (
    <section style={{ padding: "80px 20px", color: "#2b2b2b" }}>
      <h2 style={{ textAlign: "center", marginBottom: "60px" }}>
        Nos souvenirs 💞
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.8)",
              padding: "20px",
              borderRadius: "16px",
              marginBottom: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <h3>{memory.title}</h3>
            <small>{memory.date}</small>
            <p>{memory.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
