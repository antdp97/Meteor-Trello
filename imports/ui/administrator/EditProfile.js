import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class EditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:FlowRouter.getParam('id'),
            firstName:FlowRouter.getParam('firstName'),
            lastName:FlowRouter.getParam('lastName')
        };
    };

    handleChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        //console.log("You submitted data : " + this.state.email +", "+ this.state.password +", "+ this.state.username) 
        //Update Instead of Create new
        Meteor.call('updateUser',this.state.id,this.state.firstName,this.state.lastName,(e,result) =>{
            // console.log(e);
            // console.log(result);
            if(!e){
              console.log('Update Success');
            }
            
          });

    }


    render(){
        // console.log(FlowRouter.getParam('firstName'));
        // console.log(FlowRouter.getParam('lastName'))
        return(
            <div className="form-container">
                <form>
                    {/* ----------------- Profile  ----------------- */}

                    <h2> Profile </h2>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" 
                                name="firstName" 
                                className="form-control"
                                value={this.state.firstName}
                                placeholder="Change your first name:"
                                onChange={this.handleChange} 
                                />                        
                            </div>
                            <div className="col">
                                <input type="text" 
                                name="lastName"
                                className="form-control" 
                                value={this.state.lastName}
                                placeholder="Change your last name:"
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        
                    {/* Edit Button */}
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                                >Update
                            </button>
                        </div>
                    </div>

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