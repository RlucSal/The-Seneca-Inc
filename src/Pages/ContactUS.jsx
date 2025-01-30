import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "../App.css";
import { init, sendForm } from "@emailjs/browser";

const ContactUs = () => {
  useEffect(() => {
    init("qpT1pndieN_ccspAG");
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm("service_ke2poga", "template_mz6mkdn", e.target).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-image"></div>
      <div className="contact-text">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-container2">
        <p className="hero-app1">
          We Would Love To Hear From You
        </p>
      </div>
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your application!</h2>
          <p>Our team will contact you shortly.</p>
        </div>
      ) : (
        <form className="contact-form2" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              We want to hear everything! :
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      )}
      <div className="social-container">
        <a href="mailto:rluc.sal@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a href="tel:+4407593640951" className="social-icon">
          <FaPhone />
        </a>
        <a href="https://www.linkedin.com/in/the-seneca-inc/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/thesenecainc/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/theseneca.inc/?hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
