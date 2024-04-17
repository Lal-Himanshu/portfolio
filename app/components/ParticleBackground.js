"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// import { loadAll } from "@/tsparticles/all";
import { loadSlim } from "@tsparticles/slim";
import { loadBasic } from "@tsparticles/basic";
const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    init && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0b1729",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 0,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 1,
                  },
                },
              },
            },
            particles: {
              color: {
                value: [
                  "c912ed",
                  "00bfff",
                  "22dd22",
                  "ffd500",
                  "ff8000",
                  "ff2600",
                ],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
                sync: false,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
                sync: false,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default ParticleBackground;
