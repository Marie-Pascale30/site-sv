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
import Hearts from "./components/hearts";
import Hero from "./components/Hero";
import Memories from "./components/memories";
import Gallery from "./components/gallery";
import Letter from "./components/letter";
import Playlist from "./components/playlist";
import BibleVerse from "./components/bibleverse";

function App() {
  return (
    <>
      <Hearts />
      <Hero />  
      <Memories />
      <Gallery />
      <Letter />
      <BibleVerse />
      <Playlist spotifyLink="https://open.spotify.com/embed/artist/26zgIfFyTCImkHAp5gwKW8?utm_source=generator&theme=0" />
    </>
  );
}

export default App;
