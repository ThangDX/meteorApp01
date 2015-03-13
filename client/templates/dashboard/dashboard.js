Template.dashboard.rendered = function() {

};

Template.dashboard.events({
    'keyup input[type=text]': function (event, tmpl) {
        if (event.which === 27 || event.which === 13) {
            event.preventDefault();
            var project = {};
            project.name = tmpl.find('#projectNameEnter').value;
            Meteor.call('saveProject', project);
        }
    }
});
/*
Template.dashboard.helpers({
    projectToDelete: function () {
        return Session.get('projectToDelete');
    }
})
Template.delconfirm.events({
    'click .deleteConfirmed': function (evt, tmpl) {
        Meteor.call('removeProject', Session.get('projectToDelete'));
        Session.set('projectToDelete', null);
    }
})
*/

Template.projectView.helpers({
    editing_calevent: function () {
        return Session.get('editing_calevent');
    }
})
