
var config = require('private/firebase.config');
var Firebase = require('firebase');
var db = new Firebase(config.remoteUrl);
var contacts = db.child('contacts');

module.exports = {
    init: function() {
        var store = this.store;

        var firstVal = true;

        /*contacts.on('value', function(snapshot) {
            if(!firstVal) { return; }
            console.log('Contacts received', snapshot);
            store.trigger('contacts-received', snapshot.val());
            firstVal = false;
        });*/

        contacts.on('child_added', function(snapshot) {
            //console.log('Contact added', snapshot);
            var contact = snapshot.val();
            contact.key = snapshot.key();
            store.trigger('contact-received', contact);
            firstVal = false;
        });

        db.child('.info/connected').on('value', function(connectedSnap) {
            if(!firstVal) { return; }
            store.trigger('sync-status', connectedSnap.val() === true);
        });

    },
    add: function (contact) {
        contacts.push(contact);
    },
    update: function(contact) {
        var existingChild = contacts.child(contact.key);
        delete contact.key;
        existingChild.set(contact);
    }
};