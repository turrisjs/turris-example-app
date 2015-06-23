/*

*/
import React from 'react';
import Template from './template.jsx';
import generatedChannel from './store.js';

// only load style when using webpack
if (__WEBPACK__) {
    require('./style.less');
}

const GeneratedComponent = React.createClass({
    getInitialState() {
        generatedChannel.subscribe('response', this.onResponse);
        return {
            response: 'Click the button.',
        };
    },
    onResponse({data}) {
        this.setState({response: data});
    },
    handleClick() {
        generatedChannel.publish('request', {request: 'test'});
    },
    render: Template,
});

export default GeneratedComponent;
