import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment,  Table } from 'semantic-ui-react';
import moment from 'moment';

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
    return this.state.users.map(({firstName, lastName, email, id, createdAt }) => (
      <Table.Row key={id}>
        <Table.Cell onClick={(e) => this.props.history.push(`/users/${id}/show`)}>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              {`${firstName} ${lastName}`}
              <Header.Subheader>{email}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell onClick={(e) => this.props.history.push(`/users/${id}/show`)}>{moment(createdAt).format('LL')}</Table.Cell>
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
        <Segment clearing attached padded>
          <Header floated='right'>
            <Button color='blue' onClick={() => this.props.history.push('/users/new')}>New User</Button>
          </Header>
          <Header as='h3' floated='left'>
            <Icon name='users' />
            <Header.Content>
              Users
              <Header.Subheader>Displaying {this.state.users.length} users</Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>
        <Segment attached padded>
          <Table basic='very' celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Created</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderUsers()}
            </Table.Body>
          </Table>
        </Segment>

      </div>
    );
  }
}

export default UsersIndex;
