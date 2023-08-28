import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import './App.css'
import Particles from 'react-particles'

function App() {
  document.getElementById("particles-js")!.addEventListener('contextmenu', event => event.preventDefault());
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    console.debug("Initialized tsParticles");
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);
  console.clear();
  
  console.log("%cMicrosoft Windows [Version 10.0.19045]\n(c) Microsoft Corporation. Alle Rechte vorbehalten.\n\nC:\\Windows\\System32>exit", "color: white;");
  console.log("%croot@melonthedev%c:~# %cexit", "color: lime;", "color: mediumblue;", "color: white;");
  console.log("%c> %cdocument.%clocation%c = %c\"youtu.be/dQw4w9WgXcQ\"", "color: DodgerBlue;", "color: white;", "color: yellow;", "color: white;", "color: salmon;");
  console.error("Uncaught Error: Cannot rickroll user");
  console.log("%cWelcome to Melonthedev.wtf", "color: aqua; font-size: 200%;text-decoration: underline;");
  console.log("%cand welcome to the console", "color: gray; font-size: 100%;font-weight: bold;");
  console.log("%c\"hacker\"", "color: red; font-size: 100%;font-weight: bold;font-style: italic;");
  console.log('%c🍆', 'font-weight:bold; font-size:50px;');

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
              },
              particles: {
                color: {
                  value: "#6b6b6b",
                },
                links: {
                  enable: true,
                  color: "#9e9e9e",
                  opacity: 1,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  value: 60,
                  density: {
                    enable: true,
                    area: 400
                  }
                },
                size: {
                  value: 5,
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 0.1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                detectRetina: true,
              },
            }}
        />
  )
}

export default App
