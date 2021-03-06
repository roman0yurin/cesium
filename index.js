/*eslint-env node*/
'use strict';

var path = require('path');
var requirejs = require('requirejs');

requirejs.config({
                     paths : {
                         'Cesium' : path.join(__dirname, 'Source'),
                         waitSeconds: 200
                     },
                     nodeRequire : require
                 });

module.exports = requirejs('Cesium/Cesium');
