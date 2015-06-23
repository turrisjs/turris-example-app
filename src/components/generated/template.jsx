/*

*/
import React from 'react';

const render = function() {
    return (
        <div className="row generated-component">
            <h3>I am new generated component.</h3>
            Here's response from store: <b>{this.state.response}</b><br/>
            <button className="btn btn-default" onClick={this.handleClick}>Request data from store</button>
        </div>
    );
};

export default render;
