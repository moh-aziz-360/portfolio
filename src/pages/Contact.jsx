import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
      </section>
      <section className="contact-form">
        <form action="/submit-form" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:mohammed4bdulaziz@gmail.com">
            mohammed4bdulaziz@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+233595107319">+233595107319</a>
        </p>
        <p>Location: Kumasi, Ghana</p>
      </section>
    </div>
  );
};

export default Contact;
