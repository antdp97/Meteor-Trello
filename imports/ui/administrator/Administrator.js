import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UserRow from './User.js';
import { Users } from '../../api/'; 
import '../../styles/user.css';

class Admin extends Component{
    

    renderUsers(){
        //console.log(this.props.users);
        return this.props.users.map((user) => (
            <UserRow key={user._id} data_key={user._id} user={user}/>
        ));
        
    };

    render(){
        return(
            <div className="users-container">
                <h5>
                    <a href="http://localhost:3000/create" className="btn btn-primary">
                        Create User                            
                    </a>
                </h5>
                <div className="users-table">
                <table>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}    
                    </tbody>
                </table>
                </div>
            </div>
        );

    }

}

export default withTracker(() => {
    // console.log(Meteor.users.find());
    const userHandle = Meteor.subscribe('myUsers');
    if ( userHandle.ready() ) {
        return {
            users: Meteor.users.find({}).fetch(),
        };
    } else {
        return {
            users: []
        };
    }
})(Admin);