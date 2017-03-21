let fs= require('fs');

fs.readFile('logo.png',function(err,origin_buffer){
	fs.writeFile('logo_buffer.png',origin_buffer,function(err){
		if(err){
			console.log(err)
		}
	})

	let base64Image = origin_buffer.toString('base64');

	// console.log(base64Image);

	let decodeImage = new Buffer(base64Image,'base64');

	console.log(Buffer.isBuffer(decodeImage));

	console.log(decodeImage.toString('base64'))

	console.log(Buffer.compare(origin_buffer,decodeImage))

	fs.writeFile('logo_decoded.png',decodeImage,function(err){
		if(err){
			console.log(err)
		}
	})
})

