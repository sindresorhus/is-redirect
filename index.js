'use strict';

const redirectCodes = new Set([300, 301, 302, 303, 305, 307, 308]);

module.exports = statusCode => {
	if (typeof statusCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return redirectCodes.has(statusCode);
};
