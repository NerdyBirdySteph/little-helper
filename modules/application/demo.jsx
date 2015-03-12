var renderUtils = require('brixo-framework/shared/utils/render');
require('../../shared/styles/demo-page.scss');

var React = require('react');
var Application = require('./application');

var DemoComponent = React.createClass({
    render () {
        return (
            <Application/>
        );
    }
});

renderUtils(DemoComponent);
module.exports = DemoComponent;