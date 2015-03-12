var React = require('react');
var ClassMap = require('brixo-framework/shared/utils/class-map');
var renderUtils = require('brixo-framework/shared/utils/render');
var css = require('./application.scss');

var Application = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render () {
        var classes = new ClassMap('application');
        return (
            <div className={classes}>
                New Element: Application
            </div>
        );
    }
});

renderUtils(Application);
module.exports = Application;