import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WelcomeMsg = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const text = textRef.current;
    const textContent = text.textContent;
    text.textContent = "";

    let chars = textContent.split("");
    chars.forEach((char, index) => {
      const charElement = document.createElement("span");
      charElement.textContent = char;
      charElement.style.opacity = 0;
      text.appendChild(charElement);

      gsap.to(charElement, {
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
      });
    });
    chars.forEach((char, index) => {
      const charElement = document.createElement("span");
      charElement.textContent = char;
      charElement.style.opacity = 0;
    });
  }, []);
  return (
    <div className="welcomeMsgContainer">
      <p
        ref={textRef}
        className="welcomeMsg"
        data-text="Welcome to the world of Tic tac toe."
      >
        Welcome to the world of Tic tac toe.
      </p>
    </div>
  );
};

export default WelcomeMsg;
