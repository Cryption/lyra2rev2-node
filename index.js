const EventEmitter = require('events');
var Go = require('gonode').Go;

class lyra2rev2 extends EventEmitter {
	constructor() {
		super();
		
		this.go = new Go({
			path		: './node_modules/lyra2rev2/lyra2rev2.go',
			initAtOnce	: true,	
		}, (err) => {
			if (err) throw err;
			
			this.go.on('error', (err) => {
				if(err.parser) {
					console.log('Parser error: ' + err.data.toString())
				} else {
					console.log('Go error: ' + err.data.toString())
				}
			});
			
			this.emit('ready');
		});
	}
	
	hash(buf) {
		return new Promise((resolve, reject) => {
			if(!Buffer.isBuffer(buf))
				return reject("Object must be of type 'buffer'");
			
			this.go.execute({commandText: buf.toString('hex')}, function(result, response) {
				if(result.ok) {
					var resp = response.responseText;
					if(resp == '0')
						reject('Failed to decode');
					else if(resp == '1')
						reject('Failed to encode');
					else
						resolve(Buffer.from(resp, 'hex'));
				} else if(result.timeout) {
					reject("Timed out");
				} else if(result.terminated) {
					reject("Terminated");
				}
			}, {commandTimeoutSec: 30});
		});
	}
}

module.exports = new lyra2rev2();