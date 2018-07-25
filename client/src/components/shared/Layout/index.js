import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Nav from '../Nav';
import SignInLayout from '../SignInLayout';
import RegisterLayout from '../RegisterLayout';
import UsersIndex from '../../users/UsersIndex';
import UsersEdit from '../../users/UsersEdit';
import UsersNew from '../../users/UsersNew';
import UsersShow from '../../users/UsersShow';

const Layout = () => (
  <div className="base">
    <Nav />
    <Container>
      <Route path='/signin' exact component={SignInLayout} />
      <Route path='/register' exact component={RegisterLayout} />
      <Route path='/users' exact component={UsersIndex} />
      <Route path='/users/:id/edit' component={UsersEdit} />
      <Route path='/users/new' component={UsersNew} />
      <Route path='/users/:id/show' component={UsersShow} />
    </Container>
  </div>
);

export default Layout;
