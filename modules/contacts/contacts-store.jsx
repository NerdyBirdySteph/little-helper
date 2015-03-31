var Fluxo = require('fluxo');
var FirebaseService = require('models/firebase-service');

var ContactsStore = Fluxo.createStore(true, {
    initialState: {
        contacts: []
    },
    mixins: [FirebaseService],
    actions: ['sync-status','contact-received','add-contact','update-contact'],

    onSyncStatus: function(status) {
        this.setState({
            syncing: status
        });
    },
    onContactReceived: function(contact) {
        console.log('onContactReceived()', contact);
        var contacts = this.getState('contacts');
        contacts.push(contact);
        this.setState({
            contacts: contacts
        })
    },
    onAddContact: function(contact) {
        console.log('onAddContact()', contact);
        FirebaseService.add(contact);
        // TODO: Update internal state to reflect changes in case there's no connection to the server
    },
    onUpdateContact: function(contact) {
        console.log('onUpdateContact()', contact);
        FirebaseService.update(contact);
        // TODO: Update internal state to reflect changes in case there's no connection to the server
    }

});
module.exports = ContactsStore;