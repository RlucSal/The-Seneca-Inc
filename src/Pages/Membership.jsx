import React, { useState, useEffect } from "react";
import { init, sendForm } from "@emailjs/browser";

const Membership = () => {
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
    <div className="member-container">
      <div className="member-image"></div>
      <div className="image-text2">
        <h1>MEMBERSHIP</h1>
      </div>

      <div className="application-container">
        <p className="hero-app">
          The Seneca is currently accepting applications from women Harvard’s
          undergraduate.
        </p>
        <p className="text-app">
          The Seneca has an open application process: all sophomore, junior and
          senior women are invited to apply. If interested in applying, please
          fill out this form so we can inform you about upcoming events.
          <br />
          <br />
          After submitting an interest form, applicants can expect a series of
          engaging application events to help you meet current members and get
          a sense of what The Seneca is. Submitting a written application is
          also a required part of the process; it will be read name-blind.
          Applicants are strongly encouraged to reach out to current members
          with any questions or concerns during the process. This isn’t
          supposed to be stressful...it's a fun way for us to get to know you
          and for you to get to know us!
        </p>
      </div>

      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your application!</h2>
          <p>Our team will contact you shortly.</p>
        </div>
      ) : (
        <form className="application-form" onSubmit={handleSubmit}>
          <h2 className="text-form"> Join Us!</h2>
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
              Why are you interested in The Seneca, Inc.? :
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default Membership;
