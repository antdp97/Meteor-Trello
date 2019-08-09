import React,{ Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
// import '../../styles/userprofile.css';


export default class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:FlowRouter.getParam('username'),
            email :FlowRouter.getParam('email'),
            firstName:FlowRouter.getParam('firstName'),
            lastName:FlowRouter.getParam('lastName')
        };
    };
    

    
    render(){
        console.log(FlowRouter.getParam('firstName'));
        console.log(FlowRouter.getParam('lastName'));
        return(
            <div className="form-container">
                <form>
                    <h2>Login Info</h2>
                    
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Username:</label>
                        <div className="col">
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username}
                                className="form-control" 
                                placeholder="Enter your username:" 
                                disabled
                                />
                        </div>
                    </div>

                   
                    <div className="form-group row">
                        <label htmlFor="email" className="col-4 col-form-label">Email:</label>
                        <div className="col">
                            <input 
                            type="email" 
                            name="email" 
                            value={this.state.email}
                            className="form-control" 
                            placeholder="Enter your email:"
                            disabled
                            />
                        </div>
                    </div>

                

                    <hr />
                    <h2> Profile </h2>
                        <div className="form-row">
                            <div className="col">
                                <input 
                                type="text" 
                                name="firstName" 
                                value={this.state.firstName}
                                className="form-control" 
                                placeholder="Enter your first name:"
                                disabled
                                />             
                                           
                            </div>
                            <div className="col">
                                <input 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName}
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Enter your last name:"
                                disabled
                                />
                            </div>
                        </div>
                        
                





                </form>
                
            </div>


        )
    }


}