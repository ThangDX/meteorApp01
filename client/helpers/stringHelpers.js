Template.registerHelper('truncate', function(string, length) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(length);
});

Template.registerHelper('formatdate', function(datetime){
    if(moment && datetime) {
        return moment(datetime).format('DD/MM/YYYY');
    } else {
        return datetime;
    }
})