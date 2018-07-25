import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../App/logo.svg';

const SignInLayout = () => (
  <div className='sign-in-layout'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.sign-in-layout {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          <Image src={logo} /> Sign in to Round Robin
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Email address' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
            <Button color='blue' fluid size='large'>Sign in</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/users"> Sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default SignInLayout
