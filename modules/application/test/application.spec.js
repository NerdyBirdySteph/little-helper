
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Application = require('../index');

describe('Application', function() {
    it('should render', function() {
        TestUtils.renderIntoDocument(<Application />);
    });
});
