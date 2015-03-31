
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var expect = require('unexpected');

var Contacts = require('../index');


var Service = require('models/firebase-service');
var Store = require('../contacts-store');

describe('Contacts', function() {

    var stub1;
    var stub2;
    var target;

    beforeEach(function() {
        Store.dispose();
        stub1 = sinon.stub(Service, 'init', function() {
            this.store.trigger('contact-received', {
                firstName: 'foo',
                lastName: 'bar'
            });
        });
        stub2 = sinon.stub(Service, 'add', function(contact) {
            console.log('You did it woman', contact);
        });
        Store.init();
        target = TestUtils.renderIntoDocument(<Contacts />);
    });

    afterEach(function() {
        stub1.restore();
        Store.dispose();
        Store.init();
        target = null;
    });

    it('should render', function() {
        expect(target.getDOMNode().innerHTML, 'to contain', 'foo');
    });

    it('has an \'add contact\'-button', function() {
        var btn = target.getDOMNode().querySelector('.brx-button');
        expect(btn,'not to be',null);
    });

    it.skip('should add contacts', function() {
        // Enter first name // TestUtils.Simulate.change()
        // Enter last name // TestUtils.Simulate.change()
        // Get btn
        // Simulate click
    });

});