import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";

const Login = () => {
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
  }, []);
  return (
    <div>
      <h1 ref={textRef} style={{ fontFamily: "monospace" }}>
        Text appears as if typed by the user: Hello, World!
      </h1>
    </div>
  );
};

export default Login;
