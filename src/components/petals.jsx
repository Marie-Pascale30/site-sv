import Particles from "react-tsparticles";

export default function Petals() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 30 },
          color: { value: "#ff8fab" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 6 },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            outModes: { default: "out" }
          }
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
}
