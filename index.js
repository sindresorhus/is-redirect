'use strict';

module.exports = statusCode => {
	if (typeof statusCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return [300, 301, 302, 303, 305, 307, 308].indexOf(statusCode) !== -1;
};
