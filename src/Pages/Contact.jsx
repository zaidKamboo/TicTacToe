import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSaved, setMessageSaved] = useState(false);
  const sendDetails = async () => {
    try {
      const res = await fetch("http://localhost:5000/contactUs/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error sending game details:", error.message);
    }
  };
  const clearDets = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDetails();
    setMessageSaved(true);
  };
  return (
    <div className="contactPageContainer">
      {messageSaved ? (
        <div className="customAlert">
          <div className="alertMessage">
            <strong>
              Message saved successfully. In case of doubts and questions plese
              keep an eye on your email. You will be updated shortly.
            </strong>
          </div>
          <div className="cross">
            <input
              type="submit"
              className="closeBtn"
              value="X"
              onClick={(e) => {
                setMessageSaved(false);
                clearDets();
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <h1>Contact Us</h1>
      <form className="contactPageForm" onSubmit={handleSubmit}>
        <div className="formDivs">
          <label>Name :&nbsp;</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            minLength={2}
            maxLength={7}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formDivs">
          <label>Email :&nbsp;</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            maxLength={20}
            minLength={10}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formDivs">
          <div className="label">
            <label>Message :&nbsp;</label>
          </div>
          <textarea
            rows="4"
            placeholder="Your Message"
            required
            minLength={5}
            // maxLength={25}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="submitContact" type="submit">
          Submit
        </button>
      </form>

      <div className="contactInfo">
        <h2>Contact Information</h2>
        <p>
          <strong>Email : </strong> zaidkamboo100@gmail.com
        </p>
        <p>
          <strong>Phone :&nbsp;</strong>
          +91 234 567 8900
        </p>
        <p>
          <strong>Follow us : </strong>&nbsp;
          <Link
            target="__blank"
            className="playGameButton"
            to="https://www.linkedin.com/in/zaid-kamboo/"
          >
            Linked In
          </Link>
        </p>
      </div>

      <div className="contactInfo addDets ">
        <h2>Additional Details</h2>
        <p>
          <strong>Address:&nbsp;</strong> 123 Tic Tac Toe Avenue Street Melborn
          New York.
        </p>
        <p>
          <strong>Support Hours:&nbsp;</strong> Monday-Friday, 9am to 5pm.
        </p>
        <p>
          <strong>FAQs : &nbsp;</strong>
          <Link className="ablink" to="/about">
            Frequently Asked Questions(About Page)
          </Link>
        </p>
        <p>
          <Link className="ablink" to="/contact/getAllMessages">
            <button className="seeAllMessages">See all messages</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
