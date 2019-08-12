import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.js';


import '../styles/app.css';
import { Button } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';


const App = (props) => (
                <div className="app-container">
                    <header className="app-header">
                        {/* Logo */}
                        <h1>
                            <a
                                className="fa fa-github"
                            />{' '}
                            Simple Meteor Trello
                        </h1>
                        <AccountsUIWrapper />
                        <Button>
                            <h4>
                                <a href="http://localhost:3000/users">
                                    Users List
                                </a>
                            </h4>
                        </Button>
                        <Button>
                            <h4>
                                <a href="http://localhost:3000/"> 
                                    Tasks List
                                </a>
                            </h4>
                        </Button>
                    </header>
                    {/* <TodoList/> */}
                    <div>
                        {props.main}
                    </div>
                </div>
);

export default AppContainer = createContainer(props => {
    return{
        user: null
    }
},App)