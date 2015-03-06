Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('/', {
  name: 'home'
});


Router.route('/dashboard', function () {
    this.render('dashboard', {
        waitOn: function () {
            return Meteor.subscribe('projects');
        },
        data: {
            'projects': function() {
                return Projects.find();
            }
        }
    });
});

Router.route('/customers');
Router.route('/archives');
Router.route('/roles');


