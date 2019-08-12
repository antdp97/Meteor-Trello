import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'

import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../imports/ui/App';
import TodoList from '../imports/ui/task/TodoList';
import Admin from '../imports/ui/administrator/Administrator';
import CreateUser from '../imports/ui/administrator/createUser';
import UserProfile from '../imports/ui/administrator/UserProfile';
import EditProfile from '../imports/ui/administrator/EditProfile';

//Main Page - TASK MANAGER
FlowRouter.route('/',{
    name: 'tasks',
    action(){
        mount(AppContainer,{
            main: <TodoList/>
        })
    }
})

//Users List
FlowRouter.route('/users',{
    name: 'Users-list',
    action(){
        mount(AppContainer,{
            main: <Admin/>,
        })
    }
})

//User Information
FlowRouter.route('/users/:username/:email/:firstName/:lastName',{
    name: 'User-info',
    action(){
        mount(AppContainer,{
            main: <UserProfile/>,
        })
    }
})

//EDIT PROFILE
FlowRouter.route('/edit/:id/:firstName/:lastName',{
    name:'Edit-User',
    action(){
        mount(AppContainer,{
            main: <EditProfile/>,
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

//CREATE USER
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
