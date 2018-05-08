var Go = require('gonode').Go;

var go = new Go({
    path		: './node_modules/lyra2rev2/lyra2rev2.go',
    initAtOnce	: true,	
}, function(err) {
    if (err) throw err;
 
    go.on('error', function(err) {
        if(err.parser) {
            console.log('Parser error: ' + err.data.toString())
        } else {
            console.log('Go error: ' + err.data.toString())
        }
    });
});

module.exports = (buf) => {
	return new Promise((resolve, reject) => {
		if(!Buffer.isBuffer(buf))
			return reject("Object must be of type 'buffer'");
		
		go.execute({commandText: buf.toString('hex')}, function(result, response) {
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