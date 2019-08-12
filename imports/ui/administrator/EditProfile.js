import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

const styleBtn = {
    marginTop: '10px',
}

export default class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:FlowRouter.getParam('id'),
            firstName:FlowRouter.getParam('firstName'),
            lastName:FlowRouter.getParam('lastName')
        };
    };


    //When user types in the Input box,system will record the input.
    handleChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
        
    };

    //When Click the Update button the system will call for the updateUser api to update user in mongoDB
    handleSubmit = (event) => {
        event.preventDefault();
        //console.log("You submitted data : " + this.state.email +", "+ this.state.password +", "+ this.state.username) 
        //Call for the Update function
        Meteor.call('updateUser',this.state.id,this.state.firstName,this.state.lastName,(e,result) =>{
            if(!e){
              console.log('Update Success');
            }
            
          });

    }


    render(){
        return(
            <div className="form-container">
                <form>
                    {/* ----------------- Profile  ----------------- */}

                    <h2> Profile </h2>
                            <div className="form-group row">
                                <label className="col-4 col-form-label">First Name:</label>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        className="form-control"
                                        value={this.state.firstName}
                                        placeholder="Change your first name:"
                                        onChange={this.handleChange} 
                                    />   
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-4 col-form-label">Last Name:</label>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        className="form-control"
                                        value={this.state.lastName}
                                        placeholder="Change your last name:"
                                        onChange={this.handleChange} 
                                    />   
                                </div>
                            </div>                        
                            {/* Edit Button */}
                            <button
                                style={styleBtn}
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                            >Update
                            </button>
                </form>
                
            </div>
        );
    };
};

// //Only Subscribe 1 specific user findByID(user.a_id)
// export default withTracker(() => {
//     // console.log(Meteor.users.find());
//     const userHandle = Meteor.subscribe('myUsers');
//     if ( userHandle.ready() ) {
//         return {
//             users: Meteor.users.find({}).fetch(),
//         };
//     } else {
//         return {
//             users: []
//         };
//     }
// })(Admin);