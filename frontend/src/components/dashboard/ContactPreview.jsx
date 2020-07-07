import React from 'react';

const ContactPreview = ({ contact }) => {
  return (
    <div className='pricing-plan'>
      <div className='pricing-plan__header'>
        <h1 className='pricing-plan__title'>{contact.fullName}</h1>
        <h2 className='pricing-plan__summary'>{contact.age}</h2>
      </div>
      <div className='pricing-plan__description'>
        <ul className='pricing-plan__list'>
          <li className='pricing-plan__feature'>{contact.email}</li>
          <li className='pricing-plan__feature'>{contact.phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPreview;
