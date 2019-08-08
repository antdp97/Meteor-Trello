import React, { Component } from 'react';
 // User component - represents a single user row
import { Users } from '../../api/'; 
import { Meteor } from 'meteor/meteor';
import '../../styles/user.css';

export default class User extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    
};
  handleDeleteUser = () => {    
    //console.log(this.props.data_key);
    Meteor.users.remove(this.props.data_key);//Server-Side Function
  }


  render() {
    return (
          <tr className="user-info">
            <td>{this.props.user.username}</td>
            <td><i>{this.props.user._id}</i></td>
            <td><i
            className="fa fa-trash"
            onClick={this.handleDeleteUser}
          /></td>
          </tr>
    );  
  } 
}


