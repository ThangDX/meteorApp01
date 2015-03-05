/**
 * Created by thangdx on 05/03/2015.
 */
Customers = new Meteor.Collection('customers');

Customers.allow({
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