/**
 * Created by thangdx on 05/03/2015.
 */
Chats = new Mongo.Collection('chats');

Chats.allow({
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