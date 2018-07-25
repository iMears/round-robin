import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import UsersPage from './UsersPage';

const Layout = () => (
  <div className="base">
    <header>
      <nav>
        <ul>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to={`/${true ? 'login' : 'register'}`}>{true ? 'Sign in' : 'Sign out'}</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </nav>
    </header>
    <div className="container">
      <Route path="/users" exact component={UsersPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </div>
  </div>
)

const LoginPage = () => <div>This is a Login Page</div>
const RegisterPage = () => <div>This is a Register Page</div>

export default Layout;
