/**
 * Created by thangdx on 07/03/2015.
 */
Template.calendar.rendered = function() {
    var calendar = $('#projectCalendar').fullCalendar({
        dayClick: function (date, allDay, jsEvent, view) {
            var ce = {};
            ce.start = date;
            ce.end = date;
            ce.color = 'red';
            ce.className = 'todo';
            ce.project = Session.get('active_project');
            ce.title = 'New Milestone';
            ce.owner = Meteor.userId;
            Meteor.call('addCalEvent',ce);
        },
        eventClick: function (calEvent, jsEvent,view) {
            Session.set('editing.calevent',calEvent.id);
        },
        eventDrop: function (reqEvent) {
            Meteor.call('updateEventTimes', reqEvent);
        },
        events: function (start, end, timezone,callback) {
            var calEvents = Calevents.find({project: Session.get('active_project')}, {reactive: false}).fetch();
            callback(calEvents);
        },
        eventRender: function (evt, ele) {

        },
       header: {
           left: 'title',
           center: 'today',
           right: 'prev, next'
       },
        contentHeight: 'auto',
        theme: false,
        defaultView: 'month',
        selectable: true,
        editable: true,
        weekMode: 'liquid'
    }).data().fullCalendar;

    Tracker.autorun(function () {
        Calevents.find({project: Session.get('active_project')}).fetch();
        if(calendar) {
            calendar.refetchEvents();
        }
    })
}