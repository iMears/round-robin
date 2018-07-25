import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/users'>Users</Link></li>
    <li><Link to={`/${true ? 'signin' : 'signout'}`}>{true ? 'Sign in' : 'Sign out'}</Link></li>
    <li><Link to='/register'>Register</Link></li>
  </ul>
);

export default Nav;
