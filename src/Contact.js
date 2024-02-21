// src/ContactUs.js
import React from 'react';
import './Contact.css';

const ContactUs = () => {
  const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:ecom.jkdimpex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0A---%0D%0A%0D%0AName: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>For any inquiries, please email us at <span className="email-address"><a href="mailto:ecom.jkdimpex@gmail.com" className="email-link">ecom.jkdimpex@gmail.com</a></span></p>

      {/* Modern Contact Form */}
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Regarding your services" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Write your message here" required></textarea>
        </div>

        <div className="form-group">
          <button type="button" onClick={handleSubmit}>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
