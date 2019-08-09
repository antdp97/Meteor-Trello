import React, { Component } from 'react';
 // User component - represents a single user row
import { Meteor } from 'meteor/meteor';
import '../../styles/user.css';
//import '../../../server/user-methods';

export default class User extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    
};
  handleDeleteUser = () => {    
    if (confirm(`Are you sure,you want to delete ${this.props.user.username}?`)){
      //console.log('Here');
      Meteor.call('deleteUser',this.props.user._id,(e,result) =>{
        // console.log(e);
        // console.log(result);
        if(!e){
          console.log('Delete Success');
        }
        
      });
    }
    
  }


  render() {
    const {username,emails,_id,profile} = this.props.user;
    //console.log(this.props.user.firstName);
    //console.log(this.props.user.emails[0].address);
    return (
          <tr className="user-info">
            {/* Render Username*/}
            <td><a href={`http://localhost:3000/users/${username}/${emails[0].address}/${profile.firstName}/${profile.lastName}`}>{username}</a></td>
            {/* Render Delete + Edit Button */}
            <td><a href={`http://localhost:3000/edit/${_id}/${profile.firstName}/${profile.lastName}`} className="btn btn-info">Edit</a></td>
            <td><i className="fa fa-trash" onClick={this.handleDeleteUser}/></td>
          </tr>
    );  
  } 
}


