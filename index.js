'use strict';

module.exports = statusCode => {
	if (typeof statusCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return statusCode === 300 ||
		statusCode === 301 ||
		statusCode === 302 ||
		statusCode === 303 ||
		statusCode === 305 ||
		statusCode === 307 ||
		statusCode === 308;
};
