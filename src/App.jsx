// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useState } from "react";
import confetti from "canvas-confetti";
import Hearts from "./components/hearts";
import Hero from "./components/Hero";
import Memories from "./components/memories";
import Gallery from "./components/gallery";
import Letter from "./components/letter";
import Playlist from "./components/playlist";
import BibleVerse from "./components/bibleverse";
import QRCodeLove from "./components/qrcode";
import Petals from "./components/petals";
import IntroScreen from "./components/introScreen";



function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [showIntro, setShowIntro] = useState(false);

  const correctPassword = "21fevrier";

  if (!isUnlocked) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffffff, #ffc0cb)"
      }}>
        <h2>Login/Signup please <br /> ( refléchis bien 🙂 )</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid pink",
            marginBottom: "15px"
          }}
        />

        <button
          onClick={() => {
            if (password === correctPassword) {
              confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 }
              });

              setTimeout(() => {
                setShowIntro(true);
                setIsUnlocked(true);
              }, 800);
            }
            else {
              alert("Tu as intérêt à trouver hynnn");
            }
          }}
          style={{
            padding: "10px 20px",
            background: "#ff8fab",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer"
          }}
        >
          Entrer
        </button>

      </div>
    );
  }

  if (showIntro) {
    return (
      <IntroScreen onFinish={() => setShowIntro(false)} />
    );
  }

  return (
    <>
      <Hearts />
      <Petals />
      <Hero />
      <Memories />
      <Gallery />
      <Letter />
      <BibleVerse />
      <Playlist spotifyLink="https://open.spotify.com/embed/artist/26zgIfFyTCImkHAp5gwKW8?utm_source=generator&theme=0" />
      <QRCodeLove />

    </>
  );
}

export default App;
