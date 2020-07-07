import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../store/auth/actions';

const Navbar = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <nav>
      <ul>
        <li className='logo'>
          <Link to='/'>
            {' '}
            <span>Elian</span>Clinic
          </Link>
        </li>
        <li className='phone-number'>
          <h2>
            <span className='number'>054-6530019 </span>
            <span className='hide'>התקשרו עכשיו </span>
            <Link to='/login'>
              <i className='fas fa-phone-square'></i>
            </Link>
          </h2>
        </li>
        <div className='items'>
          <li>
            <a href='#/'>בית</a>
          </li>
          <li>
            <a href='#/'>אודות</a>
          </li>
          <li>
            <a href='#/'>שירותים</a>
          </li>
          <li>
            <a href='#/'>צור קשר</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = {
  loadUser
};

export default connect(null, mapDispatchToProps)(Navbar);
