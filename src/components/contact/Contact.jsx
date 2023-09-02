import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact Me!</h2>
        <img src="src/assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input className="name" type="text" placeholder="Name*"></input>
          <input className="email" type="email" placeholder="Email*"></input>
          <textarea
            className="message"
            placeholder="Type your message here..."
          ></textarea>
          <button type="Submit">Send</button>
          {message ? (
            <span className="confirm">Thank you for your interest!</span>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
