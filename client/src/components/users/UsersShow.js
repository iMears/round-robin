import React, { Component } from 'react';
import { Button, Form, Header, Icon, Message } from 'semantic-ui-react'
import moment from 'moment';

class UsersShow extends Component {
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

  render() {
    const { user: { firstName, lastName, email, id, createdAt }, title } = this.state;

    return (
      <div style={{ maxWidth: 600}}>
        <Message attached>
          <Header as='h3'>
            <Icon name='user' />
            <Header.Content>
              { title }
              <Header.Subheader>Member since { moment(createdAt).format('MMMM YYYY') }</Header.Subheader>
            </Header.Content>
          </Header>
        </Message>
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input fluid disabled label='First Name' placeholder='First Name' type='text' name='firstName' value={firstName} onChange={this.handleChange} />
            <Form.Input fluid disabled label='Last Name' placeholder='Last Name' type='text' name='lastName' value={lastName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Input fluid disabled label='Email' placeholder='Email' type='email' name='email' value={email} onChange={this.handleChange} />
          <Button color='blue' onClick={(e) => this.props.history.push(`/users/${id}/edit`)}>Edit</Button>
        </Form>
      </div>
    );
  }
}

export default UsersShow;
