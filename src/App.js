import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import Chart from './components/Chart';
import Map from './components/Map';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleEditContact = (updatedContact) => {
    const index = contacts.findIndex((contact) => contact.id === updatedContact.id);
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Contacts</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
          </Route>
          <Route path="/contacts/add">
            <ContactForm onAdd={handleAddContact} />
          </Route>
          <Route path="/contacts/:id">
            <ContactDetails contacts={contacts} onEdit={handleEditContact} />
          </Route>
          <Route path="/charts">
            <Chart />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;