# lyra2rev2-node
lyra2rev2.go wrapper for nodejs
`npm install --save lyra2rev2`

## Promise

```JavaScript
var lyra2rev2 = require('lyra2rev2');
 
lyra2rev2.on('ready', () => {
	lyra2rev2.hash(Buffer.from("hello, world!")).then(function(result) {
		console.log(result.toString('hex'));
	});;
});
```


## async/await

```JavaScript
var lyra2rev2 = require('lyra2rev2');
 
lyra2rev2.on('ready', async () => {
	console.log((await lyra2rev2.hash(Buffer.from("hello, world!"))).toString('hex'));
});

```
