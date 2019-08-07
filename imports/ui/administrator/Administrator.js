import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UserRow from './User.js';
import { Users } from '../../api/'; 
import User from './User.js';

class Admin extends Component{
    
    renderUsers(){
        //console.log(this.props.users);
        return this.props.users.map((user) => (
            <UserRow key={user._id} user={user}/>
        ));
        
    };

    render(){
        return(
            <div className="container">
                Here
                <ul>
                    {this.renderUsers()}    
                </ul>
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