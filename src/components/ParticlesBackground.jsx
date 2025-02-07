import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#00ff88" },
          size: { value: 3 },
          move: { enable: true, speed: 1 }
        }
      }}
    />
  );
};