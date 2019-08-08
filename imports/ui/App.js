import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import '../styles/app.css';

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
                        <h4>
                            <a href="http://localhost:3000/users">
                                Users List
                            </a>
                        </h4>
                        <h4>
                            <a href="http://localhost:3000/tasks"> 
                                Tasks List
                            </a>
                        </h4>
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