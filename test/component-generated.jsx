/*

*/
/* global describe, it */
// import helpers
import test from 'tape';
import React from 'React/addons';
const {TestUtils} = React.addons;

// import page
import Component from '../src/components/generated/index.js';

test('Generated component suite', function(it) {
    it.test('Should render', function(t) {
        // render
        const comp = TestUtils.renderIntoDocument(<Component />);

        // check if link and name are correct
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'div');
        t.equal(divs.length, 1);
        t.end();
    });
});
