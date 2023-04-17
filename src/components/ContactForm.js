import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone, email, location });
    setName("");
    setPhone("");
    setEmail("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;