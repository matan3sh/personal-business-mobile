import contactService from '../../services/contactService';

export const addContact = (contact) => async (dispatch) => {
  try {
    const addedContact = await contactService.add(contact);
    dispatch({ type: 'ADD_CONTACT', payload: addedContact });
  } catch (err) {
    console.log(err);
  }
};

export const loadContacts = () => async (dispatch) => {
  try {
    const contacts = await contactService.query();
    dispatch({ type: 'LOAD_CONTACTS', payload: contacts.data });
  } catch (err) {
    console.log(err);
  }
};
