import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import UserRow from './User.js';
import '../../styles/user.css';

class Admin extends Component{
    

    renderUsers(){
        //console.log(this.props.users);
        return this.props.users.map((user,index) => (
            <UserRow key={index} user={user}/>
        ));
        
    };

    render(){
        return(
            <div className="users-container">
                <h5>
                    <Button>
                        <a href="http://localhost:3000/create">Create User</a>
                    </Button>
                </h5>
                <div className="users-table">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>UserName</th>
                            {/* <th>ID</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}    
                    </tbody>
                </Table>
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