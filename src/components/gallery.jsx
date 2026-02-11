import { motion } from "framer-motion";
import MemoryCard from "./memorycard";


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';
import img18 from '../assets/img18.jpg';
import img19 from '../assets/img19.jpg';
import img20 from '../assets/img20.jpg';


export default function Gallery() {

    const memories = [
        {
            id: "memory-1",
            image: img1,
            defaultText: "",
        },
        {
            id: "memory-2",
            image: img2,
            defaultText: "",
        },
        {
            id: "memory-3",
            image: img3,
            defaultText: "",
        },
        {
            id: "memory-4",
            image: img4,
            defaultText: "",
        },
        {
            id: "memory-5",
            image: img5,
            defaultText: "",
        },
        {
            id: "memory-6",
            image: img6,
            defaultText: "",
        },
        {
            id: "memory-7",
            image: img7,
            defaultText: "",
        },
        {
            id: "memory-8",
            image: img8,
            defaultText: "",
        },
        {
            id: "memory-9",
            image: img9,
            defaultText: "",
        },
        {
            id: "memory-10",
            image: img10,
            defaultText: "",
        },
        {
            id: "memory-11",
            image: img11,
            defaultText: "",
        },
        {
            id: "memory-12",
            image: img12,
            defaultText: "",
        },
        {
            id: "memory-13",
            image: img13,
            defaultText: "",
        },
        {
            id: "memory-14",
            image: img14,
            defaultText: "",
        },
        {
            id: "memory-15",
            image: img15,
            defaultText: "",
        },
        {
            id: "memory-16",
            image: img16,
            defaultText: "",
        },
        {
            id: "memory-17",
            image: img17,
            defaultText: "",
        },
        {
            id: "memory-18",
            image: img18,
            defaultText: "",
        },
        {
            id: "memory-19",
            image: img19,
            defaultText: "",
        },
        {
            id: "memory-20",
            image: img20,
            defaultText: "",
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, // délai entre les cartes
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section style={sectionStyle}>
            <h2 style={titleStyle}>Nos souvenirs</h2>

            <motion.div style={galleryGrid} variants={containerVariants} initial="hidden" animate="show">
                {memories.map((memory) => (
                    <motion.div key={memory.id} variants={cardVariants}>
                        <MemoryCard
                            key={memory.id}
                            id={memory.id}
                            image={memory.image}
                            defaultText={memory.defaultText}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

/* =======================
   STYLES
   ======================= */

const sectionStyle = {
    padding: "100px 20px",
};

const titleStyle = {
    textAlign: "center",
    fontFamily: "'Georgia', serif",
    fontSize: "36px",
    marginBottom: "60px",
    color: "#4a2c2a",
};

const galleryGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
};