import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection("lists");
export const Cards = new Mongo.Collection("cards");

Meteor.methods({
    updateMultipleCards(
        cardId,
        { droppableId: sourceListId, index: startIndex },
        { droppableId: destinationListId, index: endIndex }
    ) {
        const cards = Cards.find(
            { listId: destinationListId },
            { sort: { seq: 1 } }
        ).fetch();
        const seq = cards[ endIndex ] ? cards[ endIndex ].seq : 0;

        if (startIndex === endIndex && sourceListId === destinationListId) {
            return;
        }

        if (sourceListId !== destinationListId) {
            for (let i = endIndex, len = cards.length; i < len; i++) {
                Cards.update({ _id: cards[i]._id }, { $inc: { seq: 1 } });
            }
        } else {
            if (startIndex < endIndex) {
                for (let i = startIndex + 1; i <= endIndex; i++) {
                    Cards.update({ _id: cards[i]._id }, { $inc: { seq: -1 } });
                }
            } else {
                for (let i = endIndex; i < startIndex; i++) {
                    Cards.update({ _id: cards[i]._id }, { $inc: { seq: 1 } });
                }
            }
        }

        Cards.update(
            { _id: cardId, listId: sourceListId },
            { $set: { seq, listId: destinationListId } }
        );
    },

    deleteListAndAllCards(listId) {
        Lists.remove({ _id: listId });
        Cards.remove({ listId });
    },
    
    assignUser(userId,cardId){
        Cards.update(
            { _id : cardId },
            { $set: {responsible:userId} },
        )
    }
});
