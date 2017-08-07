/*global require*/
// require in the complete Cesium object and reassign it globally.
// This is meant for use with the Almond loader.
require([
        'Cesium'
    ], function(
        Cesium) {
    'use strict';
    /*global self*/
    let scope;
		 if (typeof window !== 'undefined') {
				 window.Cesium = Cesium;
				 scope = window;
		 } else if (typeof self !== 'undefined') {
				 self.Cesium = Cesium;
				 scope = self;
		 } else if(typeof module !== 'undefined') {
				 module.exports = Cesium;
				 scope = module;
		 } else {
				 console.error('Unable to load Cesium.');
		 }
    if(scope.waitCesium)
            scope.waitCesium()
}, undefined, true);
