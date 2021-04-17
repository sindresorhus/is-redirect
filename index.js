const redirectCodes = new Set([300, 301, 302, 303, 305, 307, 308]);

export default function isRedirect(statusCode) {
	if (typeof statusCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return redirectCodes.has(statusCode);
}
