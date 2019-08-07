import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'
// import App from '../imports/ui/App.js';


import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../imports/ui/App';
import TodoList from '../imports/ui/TodoList';
import Admin from '../imports/ui/administrator/Administrator';
import Login from '../imports/ui/login/Login';
import Register from '../imports/ui/login/Register';
//Main Page
FlowRouter.route('/tasks',{
    name: 'tasks',
    action(){
        mount(AppContainer,{
            main: <TodoList/>
        })
    }
})
//User
FlowRouter.route('/users',{
    name: 'Users-list',
    action(){
        mount(AppContainer,{
            main: <Admin/>
        })
    }
})
// //Login
// FlowRouter.route('/login',{
//     name: 'login',
//     action(){
//         mount(AppContainer,{
//             main: <Login/>
//         })
//     }
// })

// //Register
// FlowRouter.route('/register',{
//     name: 'register',
//     action(){
//         mount(AppContainer,{
//             main: <Register/>
//         })
//     }
// })



Meteor.startup(() => {
    // render(<AppContainer />, document.getElementById('app'));
});
