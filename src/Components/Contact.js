import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await emailjs
      .sendForm(
        "service_qqvueho",
        "template_5b2n5qh",
        formRef.current,
        "q-1DfQQo0LiN4_SSf"
      )
      .then(
        (result) => {
          navigate("/Thank-You", {
            state: {
              res: "Thank You!",
              message: "Your Email has been sent successfully!",
              desc: "I will get back to you as soon as possible.",
            },
          });
          setLoading(false);
        },
        (error) => {
          navigate("/Thank-You", {
            state: {
              res: "Failed!",
              message: "There is an issue.",
              desc: "Please try again later",
            },
          });
          setLoading(false);
          console.error("error", error);
        }
      );
  };

  return (
    <div className="contact-form">
      <h1 className="ContactPage">
        <b>Contact</b> Me
      </h1>

      <form className="ContactForm" ref={formRef} onSubmit={handleSubmit}>
        <div className="ContactField">
          <label htmlFor="name" className="ContactLabel">
            <h3>Name</h3>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="InputField"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="ContactField">
          <label htmlFor="email" className="ContactLabel">
            <h3>Email</h3>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="InputField"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="ContactMessage">
          <label htmlFor="message" className="ContactLabel">
            <h3>Message</h3>
          </label>
          <textarea
            id="message"
            name="message"
            className="TextArea"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button disabled={loading} className="downloadCV" type="submit">
          <h3>{loading ? "loading..." : "Submit"}</h3>
        </button>
      </form>
    </div>
  );
};

export default Contact;
