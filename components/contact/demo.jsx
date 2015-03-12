var renderUtils = require('brixo-framework/shared/utils/render');
require('../../shared/styles/demo-page.scss');

var React = require('react');
var Contact = require('./contact');

var DemoComponent = React.createClass({
    render () {
        return (
            <Contact/>
        );
    }
});

renderUtils(DemoComponent);
module.exports = DemoComponent;