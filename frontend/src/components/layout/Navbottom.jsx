import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbottom = () => {
  return (
    <div className='bottom-nav'>
      {' '}
      <NavLink
        to='/'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>home</i>
        <span className='bottom-nav-text'>בית</span>
      </NavLink>
      <NavLink
        to='/about'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>supervised_user_circle</i>
        <span className='bottom-nav-text'>אודות</span>
      </NavLink>
      <NavLink
        to='/service'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>settings</i>
        <span className='bottom-nav-text'>שירותים</span>
      </NavLink>
      <NavLink
        to='/contact'
        exact
        className='bottom-nav-link'
        activeClassName='bottom-nav-link-active'
      >
        <i className='material-icons bottom-nav-icon'>perm_contact_calendar</i>
        <span className='bottom-nav-text'>צור קשר</span>
      </NavLink>
    </div>
  );
};

export default Navbottom;
