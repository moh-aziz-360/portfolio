import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
    loading: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);

    return () => {
      setAnimated(false);
    };
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Set loading state
      setFormStatus({
        submitted: false,
        error: false,
        message: "",
        loading: true,
      });

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Show success message
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
        loading: false,
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
          loading: false,
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Oops! Something went wrong. Please try again later.",
        loading: false,
      });
    }
  };

  return (
    <section className="contact-section">
      <div className={`contact-container ${animated ? "fade-in" : ""}`}>
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations, project inquiries, or
            just a friendly chat.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send Me a Message</h3>

            {formStatus.submitted && (
              <div
                className={`form-message ${
                  formStatus.error ? "error" : "success"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${
                    formErrors.name ? "form-error" : ""
                  }`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                />
                {formErrors.name && (
                  <div className="error-message">{formErrors.name}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${
                    formErrors.email ? "form-error" : ""
                  }`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                />
                {formErrors.email && (
                  <div className="error-message">{formErrors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control form-textarea ${
                    formErrors.message ? "form-error" : ""
                  }`}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus.loading}
                ></textarea>
                {formErrors.message && (
                  <div className="error-message">{formErrors.message}</div>
                )}
              </div>

              <button
                type="submit"
                className={`form-submit ${formStatus.loading ? "loading" : ""}`}
                disabled={formStatus.loading}
              >
                {formStatus.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div>
              <h3 className="contact-info-title">Contact Information</h3>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <a
                      href="mailto:mohammed4bdulaziz@gmail.com"
                      className="contact-info-link"
                    >
                      mohammed4bdulaziz@gmail.com
                    </a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+233595107319" className="contact-info-link">
                      +233 595 107 319
                    </a>
                  </div>
                </li>

                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-info-text">Kumasi, Ghana</div>
                </li>
              </ul>
            </div>

            <div className="contact-social">
              <h4 className="contact-social-title">Connect With Me</h4>
              <div className="contact-social-list">
                <a
                  href="https://www.linkedin.com/in/abdul-aziz-moh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                  aria-label="LinkedIn Profile"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="contact-social-icon"
                  />
                </a>
                <a
                  href="https://github.com/moh-aziz-360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-item"
                  aria-label="GitHub Profile"
                >
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="contact-social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
