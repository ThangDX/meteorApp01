/**
 * Created by thangdx on 05/03/2015.
 */
Customers = new Mongo.Collection('customers');

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