import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import useDarkModeStore from "../store/darkModeStore";

function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false);
  //   const [theme, setTheme] = useState("dark");
  const { theme } = useDarkModeStore();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  //   useEffect(() => {
  //     const currentTheme = localStorage.getItem("theme");
  //     setTheme(currentTheme);
  //     console.log(theme);
  //   }, [theme]);

  if (!engineReady) return null;

  const particleColor = theme === "dark" ? "#3b82f6" : "#f57d1f";

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: { value: 80 },
          color: { value: particleColor },
          links: { enable: true, color: particleColor, distance: 150 },
          move: { enable: true, speed: 3 },
          size: { value: 4 },
        },
        background: { color: "transparent" },
      }}
    />
  );
}

export default ParticlesBackground;
