# base64-2-safe
[RFC 4648](https://tools.ietf.org/html/rfc4648#section-5) base64url simple implementation.
## API
### base64ToSafe(base64Str);
- `base64Str` <String> base64 string.
- Returns: url safe base64.
## Demo
```js
const base64ToSafe = require('base64-2-safe');

const result = base64ToSafe('a/bc+d==');
console.log(result);
// a_bc-d
```