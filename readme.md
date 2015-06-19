# is-redirect [![Build Status](https://travis-ci.org/sindresorhus/is-redirect.svg?branch=master)](https://travis-ci.org/sindresorhus/is-redirect)

> Check if a number is a [redirect HTTP status code](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection)


## Install

```
$ npm install --save is-redirect
```


## Usage

```js
var isRedirect = require('is-redirect');

isRedirect(302);
//=> true

isRedirect(200);
//=> false
```


## Related

- [is-server-error](https://github.com/arthurvr/is-server-error)
- [is-success](https://github.com/arthurvr/is-success)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)