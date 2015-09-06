/*

*/
import React from 'react';
import {Route} from 'react-router';
import TestPage from './page.js';

const route = React.createElement(Route, {name: 'test', key: 'route_test', handler: TestPage});

export default route;
