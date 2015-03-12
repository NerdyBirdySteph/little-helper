var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./contacts.scss');

var ContactsStore = require('./contacts-store');
var Contact = require('components/contact');
var Input = require('brixo-ui/elements/input');
var Button = require('brixo-ui/elements/button');
var Header = require('brixo-ui/elements/header');
var Panel = require('brixo-ui/elements/panel');

var Contacts = React.createClass({
    mixins: [ContactsStore.mixin()],
    addContact(e) {
        this.store.trigger('add-contact', {
            firstName: this.refs.firstName.getValue(),
            lastName: this.refs.lastName.getValue()
        });
        this.refs.firstName.setValue('');
        this.refs.lastName.setValue('');
    },
    propTypes: {},
    getDefaultProps() {
        return {};
    },
    render() {
        //console.log(this.state.contacts);
        var contacts = this.state.contacts.map(function(contact) {
            return React.createElement(Contact, contact);
        });
        return (
            <div>
                <Header type="3">Add new contact</Header>
                <Panel>
                    <Input type="text" ref="firstName" label="First name:" required />
                    <Input type="text" ref="lastName" label="Last name:" required />
                    <Button text="+ Add contact" role="primary" onClick={this.addContact} />
                </Panel>
                <Header type="3">Existing contacts</Header>
                <div>{{contacts}}</div>
            </div>
        );
    }
});

renderUtils(Contacts);
module.exports = Contacts;