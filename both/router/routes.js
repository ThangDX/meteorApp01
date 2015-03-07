/*
Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('/', {
  name: 'home'
});


Router.route('/dashboard', function () {
    this.render('dashboard', {
        waitOn: function() {
            return Meteor.subscribe('projects');
        },
        data: function() {
            return Projects.find();
        }
    })
});

Router.route('/customers');
Router.route('/archives');
Router.route('/roles');

*/

Router.map(function() {
    this.route('home', {
        path: '/',
        layoutTemplate:'appLayout'
    });

    this.route('dashboard',{
        path: '/dashboard',
        template: 'dashboard',
        waitOn: function() {
            return [Meteor.subscribe('projects')]
        },
        data: function() {
            return {
                projects: Projects.find()
            }
        }
    });

    this.route('/customers');
    this.route('/archives');
    this.route('/roles');

});