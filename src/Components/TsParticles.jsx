import React from 'react';
import Particles from 'react-tsparticles';
import "../css/App.css"

function TsParticles(props) {
    return (
             <Particles
                    id="tsparticles"
                    options={{
                    background: {
                        color: {
                        value: "#000000",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        bubble: {
                            distance: 800,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffd369",
                        },
                        links: {
                        color: "#ffd369",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        collisions: {
                        enable: false,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "out",
                        bounce: false,
                        random: false,
                        speed: 1,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 60,
                        },
                        opacity: {
                        value: 0,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        random: true,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                    }}
         />
    );
}

export default TsParticles;