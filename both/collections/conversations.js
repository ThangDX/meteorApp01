/**
 * Created by thangdx on 05/03/2015.
 */
Conversations = new Meteor.Collection('conversations');

Conversations.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});