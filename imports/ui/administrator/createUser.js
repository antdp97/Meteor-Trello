import React , { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
//import '../../api/user-methods';

export default class createUser extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email :'',
            password:''
        }
        
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
        //console.log("You submitted data : " + this.state.email +", "+ this.state.password +", "+ this.state.username) 
        Accounts.createUser({
            email: this.state.email,
            username:this.state.username,
            password:this.state.password
            
        })
    }


    render(){
        return(
            <div className="form-container">
                <form>
                    <h2>Login Info</h2>
                    {/* User Name */}
                    <div className="form-group row">
                        <label className="col-4 col-form-label">Username:</label>
                        <div className="col">
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Enter your username:" 
                                required/>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-group row">
                        <label htmlFor="password" className="col-4 col-form-label">Password(8 characters minimum):</label>
                        <div className="col">
                            <input 
                                type="password" 
                                name="password" 
                                value={this.state.password}  
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Enter your password:" 
                                minLength="8" 
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group row">
                        <label htmlFor="email" className="col-4 col-form-label">Email:</label>
                        <div className="col">
                            <input 
                            type="email" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange} 
                            className="form-control" 
                            placeholder="Enter your email:"
                            />
                        </div>
                    </div>

                    {/* ----------------- Profile  ----------------- */}

                    {/* <hr />
                    <h2> Profile </h2>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="firstName" className="form-control" placeholder="Enter your first name:"/>                        
                            </div>
                            <div className="col">
                                <input type="text" name="lastName" className="form-control" placeholder="Enter your last name:"/>
                            </div>
                        </div> */}
                        
                        {/* Gender */}
                        {/* <div className="form-check">
                            Gender:
                            <br/>
                            <input className="form-check-input" type="radio" name="male" id="gridRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Male
                            </label>
                            
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="female" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Female
                            </label>
                        </div>
                    </div> */}
                    





                    {/* Create Button */}
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.handleSubmit}
                                >Create
                            </button>
                        </div>
                    </div>

                </form>
                
            </div>
        )
    }
}



