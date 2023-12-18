import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ModernLoadingAnimation = () => {
  const spinnerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const spinner = spinnerRef.current;
    const particles = particlesRef.current;

    if (spinner && particles) {
      const mainSpinner = gsap.to(spinner, {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "linear",
      });

      particles.forEach((particle, index) => {
        gsap.to(particle, {
          rotation: -360,
          duration: 1.5 + index * 0.1, // Adjust the duration for particle delay
          repeat: -1,
          ease: "linear",
        });
      });

      return () => {
        mainSpinner.kill();
        gsap.killTweensOf(particles);
      };
    }
  }, []);

  const createParticles = () => {
    const numberOfParticles = 8; // Number of particles
    const angleIncrement = (2 * Math.PI) / numberOfParticles;
    const radius = 20;

    const particles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Add shadow to particles
          }}
        ></div>
      );

      particles.push(particle);
    }

    return particles.map((particle, index) => {
      const angle = index * angleIncrement;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return React.cloneElement(particle, {
        style: {
          ...particle.props.style,
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        },
      });
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        zIndex: 5,
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
        boxShadow: "0 0 20px rgb(255, 255, 255)", // Add shadow to the main spinner
      }}
    >
      <div
        ref={spinnerRef}
        style={{
          width: "70%",
          height: "70%",
          border: "4px solid transparent",
          borderTopColor: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Add shadow to the main spinner
        }}
      ></div>
      {createParticles()}
    </div>
  );
};

export default ModernLoadingAnimation;
