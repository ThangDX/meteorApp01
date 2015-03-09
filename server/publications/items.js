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

Meteor.publish('calevents', function () {
    return Calevents.find();
});
Meteor.publish('conversations', function () {
    return Conversations.find();
});
Meteor.publish('todos', function () {
    return Todos.find();
});
Meteor.publish('uploads', function () {
    return Uploads.find();
});