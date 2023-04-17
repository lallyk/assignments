import React from "react";

const ContactDetails = ({ contact }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Phone: {contact.phone}</p>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Location: {contact.location}</p>
      </div>
    </div>
  );
};

export default ContactDetails;