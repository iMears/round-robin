import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

class RegisterLayout extends Component {
  state = {
    agreedToTermsAndConditions: false,
  };

  agreeToTermsAndConditions = () => {
    this.setState({ agreedToTermsAndConditions: !this.state.agreedToTermsAndConditions });
  }

  render() {
    return (
      <div style={{ maxWidth: 600}}>
        <Message attached header='Welcome to Round Robin!' content='Fill out the form below to sign up for a new account' />
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
            <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
          </Form.Group>
          <Form.Input label='Email' placeholder='Email' type='text' />
          <Form.Input label='Password' type='password' />
          <Form.Checkbox inline label='I agree to the terms and conditions' onClick={this.agreeToTermsAndConditions} />
          <Button color='blue' onClick={(e) => console.log} disabled={!this.state.agreedToTermsAndConditions}>Submit</Button>
        </Form>
        <Message attached='bottom' warning>
          Already signed up?&nbsp;<a href='/signin'>Sign in</a>
        </Message>
      </div>
    );
  }
}

export default RegisterLayout;
