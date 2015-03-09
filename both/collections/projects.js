/**
 * Created by thangdx on 05/03/2015.
 */
Projects = new Mongo.Collection('projects');

Projects.allow({
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