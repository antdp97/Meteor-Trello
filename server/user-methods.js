import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
    deleteUser(userId){
        //console.log(userId);
        Meteor.users.remove( {_id : userId} );
    },

    updateUser(userid,userFirstName,userLastName){
        // console.log(userid);
        // console.log(userFirstName);
        // console.log(userLastName);
        Meteor.users.update(
            { _id:userid },
            { $set :
                {
                profile:{
                    firstName:userFirstName,
                    lastName:userLastName
                }
                }
            }
        );
    }

});