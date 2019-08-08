import { Meteor } from 'meteor/meteor';

import { Lists, Cards } from '../imports/api';

Meteor.publish('lists', () => {
    return Lists.find({});
});
Meteor.publish('cards', listId => Cards.find({ listId }));

Meteor.publish('myUsers', () => {
    return Meteor.users.find({}); //cursor
});

//Meteor.publish('users',userId => Users.find({userId}));

