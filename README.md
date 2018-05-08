# lyra2rev2-node
lyra2rev2.go wrapper for nodejs
`npm install --save lyra2rev2`

```JavaScript
var lyra2rev2 = require('lyra2rev2');

console.log(lyra2rev2(Buffer.from("hello, world!")).toString('hex'));
```
