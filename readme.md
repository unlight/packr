packr
-----
Serialize/unserialize data (including functions).
Helps transfer parameters for functions between environments.

WHY?
----
Maybe helpful for:
* https://github.com/segmentio/nightmare
* https://github.com/ohjames/process-pool

USAGE
-----
```js
import {serialize, deserialize} from "packr";
var data = [
	1,
	"a",
	(b) => b
];
var serialized = serialize(data);
var [num, str, func] = deserialize(serialized);
console.log(num, str); // 1, a
console.log(func("Hello")); // Hello
```

TODO
----
- nested object with functions