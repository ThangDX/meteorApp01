/**
 * Created by thangdx on 05/03/2015.
 */
Calevents = new Mongo.Collection('calevents');

Calevents.allow({
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