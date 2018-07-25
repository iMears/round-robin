import React, { Component } from 'react';
import { Button, Header, Icon, Menu, Message, Table } from 'semantic-ui-react';

class UsersIndex extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(console.error)
  };

  handleDeleteUser = (id) => {
    console.log('clicked');
    fetch(`/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
    .then((response) => this.fetchUsers())
    .catch(console.error);
  }

  renderUsers = () => {
    return this.state.users.map(({firstName, lastName, email, id}) => (
      <Table.Row key={id}>
        <Table.Cell onClick={(e) => this.props.history.push(`/users/${id}/show`)}>{firstName}</Table.Cell>
        <Table.Cell onClick={(e) => this.props.history.push(`/users/${id}/show`)}>{lastName}</Table.Cell>
        <Table.Cell onClick={(e) => this.props.history.push(`/users/${id}/show`)}>{email}</Table.Cell>
        <Table.Cell>
          <Icon name='pencil alternate' onClick={(e) => this.props.history.push(`/users/${id}/edit`)}/>
          <Icon name='trash alternate outline' onClick={(e) => this.handleDeleteUser(id)}/>
        </Table.Cell>
      </Table.Row>
    ))
  }

  render() {
    return (
      <div className="users-index">
        <Message attached>
          <Header as='h3'>
            <Button floated='right' color='blue' onClick={() => this.props.history.push('/users/new')}>New User</Button>
            <Icon name='users' />
            <Header.Content>
              Users
              <Header.Subheader>Index view of all users</Header.Subheader>
            </Header.Content>
          </Header>
        </Message>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderUsers()}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='4'>
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
