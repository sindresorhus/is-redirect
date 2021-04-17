# is-redirect

> Check if a number is a [redirect HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection)

## Install

```
$ npm install is-redirect
```

## Usage

```js
import isRedirect from 'is-redirect';

isRedirect(302);
//=> true

isRedirect(200);
//=> false
```

## Related

- [is-server-error](https://github.com/arthurvr/is-server-error)
- [is-success](https://github.com/arthurvr/is-success)

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-redirect?utm_source=npm-is-redirect&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
