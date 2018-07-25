import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

class UsersCreate extends Component {
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
    fetch('/users', {
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
      <div>
        <Message attached header='New User' content='Fill out the form below to create a new user'/>
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

export default UsersCreate;
