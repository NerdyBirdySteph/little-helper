var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./contact.scss');

var Panel = require('brixo-ui/elements/panel');

var Contact = React.createClass({
    propTypes: {
        firstName: React.PropTypes.string,
        lastName: React.PropTypes.string
    },
    getDefaultProps() {
        return {};
    },
    render() {
        return (
            <Panel>{this.props.firstName} {this.props.lastName}</Panel>
        );
    }
});

renderUtils(Contact);
module.exports = Contact;