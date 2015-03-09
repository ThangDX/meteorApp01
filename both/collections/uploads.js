/**
 * Created by thangdx on 07/03/2015.
 */
Uploads = new FS.Collection('uploads',
    {stores: [new FS.Store.FileSystem('uploads', {path:'/Users/KPMS/LearnMeteor/meteorApp01'})]});
Uploads.allow({
    insert: function() {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    download: function () {
        return true;
    }
})