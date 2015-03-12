
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Contacts = require('../index');

describe('Contacts', function() {
    it('should render', function() {
        TestUtils.renderIntoDocument(<Contacts />);
    });
});
