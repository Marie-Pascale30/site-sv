import { motion } from "framer-motion";

export default function Hearts() {
  return [...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      animate={{ y: [-20, -1000], opacity: [1, 0] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: i * 1.5,
      }}
      style={{
        position: "fixed",
        bottom: "-50px",
        left: `${Math.random() * 100}%`,
        fontSize: "24px",
      }}
    >
      ❤️
    </motion.div>
  ));
}
