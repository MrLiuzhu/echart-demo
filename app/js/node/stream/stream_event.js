const fs=require('fs');

let readStream = fs.createReadStream('burp-taoboa.xml');
var n=0;

readStream
	.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log('data emits');

		n++;

		readStream.pause();
		console.log('data pause');
		setTimeout(function(){
			console.log('data pause end')
			readStream.resume()
		},10)

		// console.log(chunk.toString('utf8'))
	})
	.on('readable',function(){
		console.log('data readable')
	})
	.on('end',function(){
		console.log(n)
		console.log('data end')
	})
	.on('close',function(){
		console.log('data closed')
	})
	.on('error',function(){
		console.log('data error')
	})