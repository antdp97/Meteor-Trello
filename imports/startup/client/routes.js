// // import React from 'react';
// // import { Router , Route , Switch } from 'react-router';
// // import createBrowserHistory from 'history/createBrowserHistory';

// // //route components 
// // import App from '../../ui/App';
// // import User from '../../ui/administrator/Administrator.js';
// // import UserInfo from '../../ui/administrator/User.js';

// // const browserHistory = createBrowserHistory();

// // export const renderRoutes = () => (
// //     <Router history={browserHistory}>
// //         <Switch>
// //             <Route exact path="/" component={App}/>
// //             <Route exact path="/administrator" component={User}/>
// //             <Route exact path="/" component={UserInfo} />
// //         </Switch>
// //     </Router>
// // )

// //FLOW ROUTER
// import React from 'react';
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { mount } from 'react-mounter';

// import AppContainer from '../../ui/App';
// import TodoList from '../../ui/TodoList';
// import Admin from '../../ui/administrator/Administrator';

// console.log('x')
// //Main Page
// FlowRouter.route('/tasks',{
//     name: 'tasks',
//     action(){
//         mount(AppContainer,{
//             main: <TodoList/>
//         })
//     }
// })
// //User
// FlowRouter.route('/users',{
//     name: 'Users-list',
//     action(){
//         mount(AppContainer,{
//             main: <Admin/>
//         })
//     }
// })

// FlowRouter.route('/users/add',{
//     name: 'AddUser',
//     action(){
//         mount(AppContainer,{
//             main: <Admin/>
//         })
//     }
// })  








