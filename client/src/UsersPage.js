import React, { Component } from 'react';

class UsersPage extends Component {
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
    return this.state.users.map(({firstName, lastName, id}) => (
      <div key={id}>Name: {firstName} {lastName}</div>
    ));
  }

  render() {
    return (
      <div className="users">
        <h1>Users</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

export default UsersPage;
