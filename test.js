'use strict';
var test = require('ava');
var isRedirect = require('./');

test(function (t) {
	t.assert(isRedirect(305));
	t.assert(!isRedirect(405));
	t.end();
});
