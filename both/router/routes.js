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

    this.route('projectView', {
        path: '/projects/:id',
        layoutTemplate: 'appLayout',
        loginRequired: 'entrySignIn',
        waitOn: function() {
            Meteor.subscribe('customers');
            Meteor.subscribe('conversations',this.params.id);
            Meteor.subscribe('todos',this.params.id);
            Meteor.subscribe('calevents',this.params.id);
            Meteor.subscribe('uploads',this.params.id);
            return Meteor.subscribe('projects');
        },
        data: function() {
            return Projects.findOne({_id:this.params.id});
        },
        onAfterAction: function() {
            SEO.set({
                title: 'Project View |' + SEO.settings.title
            })
        }
    });

    this.route('/customers');
    this.route('/archives');
    this.route('/roles');

});