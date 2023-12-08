import React, { useRef, useEffect } from "react";
import bgVid from "../Media/Videos/bgVis.mp4";
import WelcomeMsg from "./WelcomeMsg";
import { gsap } from "gsap/gsap-core";

const Home = () => {
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
    <>
      <div className="homeCont">
        <div className="wlcMC">
          <WelcomeMsg />
        </div>
        <div className="firstPageParent">
          <div className="firstpageMobile">
            <video autoPlay loop muted src={bgVid}></video>
          </div>
        </div>
      </div>
      <div className="firstPagePart2">
        <div className="content" ref={textRef}>
          Tic Tac Toe : A classic game played on a 3x3 grid where two players
          take turns marking empty spaces with "X" or "O" until one player
          successfully aligns three of their marks horizontally, vertically, or
          diagonally, winning the game. If all spaces are filled without a
          winner, the game ends in a draw. Players aim to outmaneuver their
          opponent strategically by placing their marks strategically to create
          winning sequences while blocking their opponent's attempts to do the
          same. The game is simple, yet it offers a variety of strategic
          possibilities, making it a timeless and widely enjoyed pastime.
        </div>
        <div className="footer">
          <footer>Copyright &copy; Zaid Kamboo 2023-24</footer>
        </div>
      </div>
    </>
  );
};

export default Home;
