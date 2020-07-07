import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../../store/auth/actions';

import Showcase from '../layout/Showcase';

class Home extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div className='home-wrapper'>
        <Showcase />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
