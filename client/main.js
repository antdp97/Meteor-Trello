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
import CreateUser from '../imports/ui/administrator/createUser';
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
            main: <Admin/>,
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

//Register
FlowRouter.route('/create',{
    name: 'create',
    action(){
        mount(AppContainer,{
            main: <CreateUser/>,
        })
    }
})



Meteor.startup(() => {
    // render(<AppContainer />, document.getElementById('app'));
});
