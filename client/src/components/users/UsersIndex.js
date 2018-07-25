import React, { Component } from 'react';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';

class UsersIndex extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(console.error)
  }

  renderUsers = () => {
    return this.state.users.map(({firstName, lastName, email, id}) => (
      <Table.Row key={id}>
        <Table.Cell>{firstName}</Table.Cell>
        <Table.Cell>{lastName}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
      </Table.Row>
    ))
  }

  render() {
    return (
      <div className="users-index">
        <Button onClick={() => this.props.history.push('/users/create')}>New User</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderUsers()}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

export default UsersIndex;
