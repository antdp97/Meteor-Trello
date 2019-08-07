import React, { Component } from 'react';
 // User component - represents a single user row

export default class User extends Component {

  render() {

    return (

      <li>{this.props.user.fullname}</li>

    );

  }

}

