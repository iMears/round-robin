import React, { Component } from 'react';
import { Button, Form, Header, Icon, Message } from 'semantic-ui-react'

class UsersEdit extends Component {
  state = {
    title: '',
    user: {
      firstName: '',
      lastName: '',
      email: '',
    },
  };

  componentDidMount() {
    fetch(`/users/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(user => this.setState({ user, title: `${user.firstName} ${user.lastName}` }))
      .catch(console.error);
  }

  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user, user: { id } } = this.state;

    fetch(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
    .then((response) => this.props.history.push(`/users/${id}/show`))
    .catch(console.error);
  }

  render() {
    const { user: { firstName, lastName, email}, title } = this.state;

    return (
      <div style={{ maxWidth: 600}}>
        <Message attached>
          <Header as='h3'>
            <Icon name='user' />
            <Header.Content>
              { title }
              <Header.Subheader>Update the form below to edit the user</Header.Subheader>
            </Header.Content>
          </Header>
        </Message>
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First Name' placeholder='First Name' type='text' name='firstName' value={firstName} onChange={this.handleChange} />
            <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' name='lastName' value={lastName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Input fluid label='Email' placeholder='Email' type='email' name='email' value={email} onChange={this.handleChange} />
          <Button color='blue' onClick={this.handleSubmit}>Save</Button>
        </Form>
      </div>
    );
  }
}

export default UsersEdit;
