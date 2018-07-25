import React, { Component } from 'react';
import { Button, Form, Header, Icon, Message } from 'semantic-ui-react'

class UsersNew extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
    fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
    .then((result) => {
      this.props.history.push('/users')
    })
    .catch(console.error);
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div style={{ maxWidth: 600}}>
        <Message>
          <Header as='h3'>
            <Icon name='user' />
            <Header.Content>
              New User
              <Header.Subheader>Fill out the form below to create a new user</Header.Subheader>
            </Header.Content>
          </Header>
        </Message>
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First Name' placeholder='First Name' type='text' name='firstName' value={firstName} onChange={this.onChange} />
            <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' name='lastName' value={lastName} onChange={this.onChange} />
          </Form.Group>
          <Form.Input fluid label='Email' placeholder='Email' type='text' name='email' value={email} onChange={this.onChange} />
          <Button color='blue' onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default UsersNew;
