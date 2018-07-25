import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Nav from '../Nav';
import SignInLayout from '../SignInLayout';
import UsersIndex from '../../users/UsersIndex';
import UsersEdit from '../../users/UsersEdit';
import UsersCreate from '../../users/UsersCreate';
import UsersShow from '../../users/UsersShow';

const Layout = () => (
  <div className="base">
    <Nav />
    <Container>
      <Route path='/signin' exact component={SignInLayout} />
      <Route path='/users' exact component={UsersIndex} />
      <Route path='/users/:id/edit' component={UsersEdit} />
      <Route path='/users/create' component={UsersCreate} />
      <Route path='/users/:id/show' component={UsersShow} />
    </Container>
  </div>
);

export default Layout;
