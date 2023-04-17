import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/contacts/add">Add Contact</Link>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone} - {contact.email} - {contact.address}
            <button onClick={() => onDelete(contact.id)}>Delete</button>
            <Link to={`/contacts/${contact.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;