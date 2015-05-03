// react
import React from 'react';
import Example from 'component-turris-example';
import Chrome from '../../components/chrome/index.js';

const render = function() {
    return (
        <Chrome>
            <h1>I am other page</h1>
            <Example />
        </Chrome>
    );
};

export default render;
