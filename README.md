# lyra2rev2-node
lyra2rev2.go wrapper for nodejs
`npm install --save lyra2rev2`

<<<<<<< HEAD
## Promise

```JavaScript
var lyra2rev2 = require('lyra2rev2');

lyra2rev2(Buffer.from("hello, world!")).then(function(result) {
	console.log(result.toString('hex'));
});;
```

## async/await

```JavaScript

console.log((await lyra2rev2(Buffer.from("hello, world!"))).toString('hex'));

```
=======
```JavaScript
var lyra2rev2 = require('lyra2rev2');

console.log(lyra2rev2(Buffer.from("hello, world!")).toString('hex'));
```
>>>>>>> eb76f18efddaa13eec169b584b488994a3ebe9a6
