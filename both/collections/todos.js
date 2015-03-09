/**
 * Created by KPMS on 09/03/15.
 */
Todos = new Mongo.Collection('todos');

Todos.allow({
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