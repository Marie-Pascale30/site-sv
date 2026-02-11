import { motion } from "framer-motion";

export default function AncientBook({ leftPage, rightPage, reference }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={bookWrapper}
    >
      {/* <div style={coverBack} />
      <div style={pagesStack} /> */}

      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={openBook}
      >
        <div style={pageLeft}>
          <p>{leftPage}</p>
        </div>

        <div style={spine} />

        <div style={pageRight}>
          <p>{rightPage}</p>
          <small style={referenceStyle}>{reference}</small>
        </div>
      </motion.div>

      <div style={coverFront} />
    </motion.div>
  );
}

/* STYLES */
const bookWrapper = {
  position: "relative",
  width: "900px",
  maxWidth: "100%",
  perspective: "1400px",

};

// const coverBack = {
//   position: "absolute",
//   inset: 0,
//   background: "linear-gradient(135deg, #5a2e1b, #3b1f14)",
//   borderRadius: "14px",
//   transform: "translateY(18px)",
// };

const coverFront = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, #4a2516, #2f180f)",
  borderRadius: "14px",
  zIndex: -1,
};

// const pagesStack = {
//   position: "absolute",
//   inset: "12px",
//   background: "#f3ead7",
//   borderRadius: "10px",
//         transform: "translateY(10px)",
    
//     };

const openBook = {
  display: "flex",
  background: "#fffaf0",
  borderRadius: "10px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
};

const pageLeft = {
  flex: 1,
  padding: "50px",
  fontFamily: "'Georgia', serif",
  lineHeight: "1.9",
};

const pageRight = {
  flex: 1,
  padding: "50px",
  fontFamily: "'Georgia', serif",
  lineHeight: "1.9",
};

const spine = {
  width: "6px",
  background: "linear-gradient(to bottom, #c2b59b, #a8926e)",
};

const referenceStyle = {
  display: "block",
  marginTop: "30px",
  fontStyle: "italic",
  opacity: 0.7,
};
