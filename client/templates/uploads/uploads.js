/**
 * Created by thangdx on 16/03/2015.
 */
Template.uploads.events({
    'change .myFileInput': function(evt, tmpl) {
        FS.Utility.eachFile(event, function (file) {
            var theFile = new FS.File(file);
            theFile.creatorId = Meteor.userId();
            theFile.project = Session.get('active_project');
            Uploads.insert(theFile, function (err, fileObj) {
                if(err){

                }
            })
        })
    }
});
Template.uploads.helpers({
    'uploads': function () {
        return Uploads.find({project: Session.get('active_project')});
    }
})