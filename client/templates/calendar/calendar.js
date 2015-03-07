/**
 * Created by thangdx on 07/03/2015.
 */
Template.calendar.rendered = function() {
    $calendar = $('#projectCalendar');
    var calendar = $calendar.fullCalendar({
       header: {
           left: 'title',
           center: 'today',
           right: 'prev, next'
       },
        contentHeight: 200,
        theme: false,
        defaultView: 'basicWeek',
        selectable: true,
        editable: true,
        weekMode: 'liquid'
    });
}