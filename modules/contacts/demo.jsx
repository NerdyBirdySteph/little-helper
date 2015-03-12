var renderUtils = require('brixo-framework/shared/utils/render');
require('../../shared/styles/demo-page.scss');

var React = require('react');
var Contacts = require('./contacts');

var DemoComponent = React.createClass({
    render () {
        return (
            <Contacts/>
        );
    }
});

renderUtils(DemoComponent);
module.exports = DemoComponent;