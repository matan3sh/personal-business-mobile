import React from 'react';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/contact/actions';

import ContactList from '../dashboard/ContactList';

class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.loadContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <>{!contacts.length ? 'Loading' : <ContactList contacts={contacts} />}</>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

const mapDispatchToProps = {
  loadContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
