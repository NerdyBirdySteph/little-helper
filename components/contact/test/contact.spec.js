
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Contact = require('../index');

describe('Contact', function() {
    it('should render', function() {
        TestUtils.renderIntoDocument(<Contact />);
    });
});
