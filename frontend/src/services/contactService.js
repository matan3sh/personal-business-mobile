import axios from 'axios';

export default {
  add,
  query
};

async function add(contact) {
  return await axios.post('/api/contact', contact, {
    headers: { 'Contect-Type': 'application/json' }
  });
}

async function query() {
  return await axios.get('/api/contact');
}
