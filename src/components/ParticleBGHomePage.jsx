import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBGHomePage = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => { }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
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
                            value: ["#FF8A00","#8A00FF"]
                        },
                        links: {
                            color: "#1ecbe1",
                            distance: 50,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
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
                            density: {
                                enable: false,
                                area: 800,
                            },
                            value: 7,
                        },
                        opacity: {
                            value: 0.15,
                        },
                        shape: {
                            type: "polygon",
                            polygon: {
                            nb_sides: 6,
                        },
                        },
                        size: {
                            value: { min: 80, max: 200 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticleBGHomePage;
