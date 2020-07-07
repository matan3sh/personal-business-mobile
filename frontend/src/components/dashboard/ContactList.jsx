import React from 'react';
import ContactPreview from './ContactPreview';

const ContactList = ({ contacts }) => {
  return (
    <div className='contact-list-wrapper'>
      {contacts.map((contact) => (
        <ContactPreview key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
