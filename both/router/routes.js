Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('/', {
  name: 'home'
});


Router.route('/dashboard');
Router.route('/customers');
Router.route('/archives');
Router.route('/roles');


