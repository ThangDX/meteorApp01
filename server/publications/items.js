Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publish('projects', function () {
    return Projects.find({});
});

Meteor.publish('customers', function () {
    return Customers.find();
});

Meteor.publish('calevents', function (projct) {
    return Calevents.find({project:project});
});
Meteor.publish('conversations', function (projct) {
    return Conversations.find({project:project});
});
Meteor.publish('todos', function (projct) {
    return Todos.find({project:project});
});
Meteor.publish('uploads', function (projct) {
    return Uploads.find({project:project});
});