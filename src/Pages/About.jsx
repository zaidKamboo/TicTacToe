import React from "react";
import logo from "../Media/Images/Logo.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="aboutPageContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="aboutPageContent">
        <div className="aboutPageKeyPoints">
          <div className="aboutPageKeyPoint">
            <strong>Introduction</strong>
            <p>
              Welcome to our Tic-Tac-Toe game! This classic game has entertained
              people for generations. Test your skills against friends or
              challenge our AI opponent.
            </p>
          </div>
          <div className="aboutPageKeyPoint">
            Game Features
            <ul className="gameFeatures">
              <li>
                <div className="qna">
                  <strong>Play Anywhere : </strong>
                  <p>
                    Enjoy the game on your desktop, tablet, or mobile device.
                  </p>
                </div>
              </li>
              <li>
                <div className="qna">
                  <strong>Multiple Modes : </strong>
                  <p>Play against a friend or challenge the computer.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="aboutPageKeyPoint">
            Meet the Team
            <ul className="meetTheTeam">
              <li>
                <strong>Zaid Kamboo</strong>
                <ul className="devDetails">
                  <strong>Role : </strong>
                  <p>&nbsp;Lead Developer</p>
                </ul>
              </li>
              <li>
                <strong>References : </strong>
                <ul className="references">
                  <li>ChatGPT</li>
                  <li>Google</li>
                  <li>W3Schools</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="aboutPageKeyPoint">
            Testimonals
            <div className="qna">
              <p>
                "This game is so addictive! I love playing it in my free time."
                - Sarah
              </p>
            </div>
            <p>"Simple yet challenging. Great game for all ages!" - John</p>
          </div>
          <div className="aboutPageKeyPoint">
            Fun Facts
            <ul className="references">
              <li>
                <div className="qna">
                  Did you know? Tic-Tac-Toe is also known as "Noughts and
                  Crosses" in some regions.
                </div>
              </li>
              <div className="qna">
                <li>The game has been traced back to ancient Egypt.</li>
              </div>
            </ul>
          </div>
          <div className="aboutPageKeyPoint faqs">
            {/* <strong> */}
            FAQs & Support
            {/* </strong> */}
            <div className="qna">
              <div className="question">
                <strong>Q : </strong>
                <p>&nbsp;How do I win at Tic-Tac-Toe?</p>
              </div>
              <div className="ans">
                <strong>A : </strong>
                <p>
                  &nbsp;To win, you must place three of your marks in a
                  horizontal, vertical, or diagonal row.
                </p>
              </div>
            </div>
            <div className="qna">
              <div className="question">
                <strong>Q : </strong>
                <p>&nbsp;Having technical issues?</p>
              </div>
              <div className="ans">
                <strong>A : </strong>
                <p>
                  &nbsp;Reach out to our support tea&nbsp;
                  <a className="supportLink">supportTicTacToe@gmail.com</a>
                  &nbsp;for assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutPageKeyPoint">
            Call to Action
            <ul>
              <li>
                <strong>Play Now : </strong>&nbsp;
                <Link className="playGameButton" to="/playGame">
                  Play game.
                </Link>
              </li>
              <li>
                <strong>Follow us : </strong>&nbsp;
                <Link
                  target="__blank"
                  className="playGameButton"
                  to="https://www.linkedin.com/in/zaid-kamboo/"
                >
                  Linked In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
