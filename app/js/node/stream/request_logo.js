const http=require('http');
const fs=require('fs')

http.createServer(function(req,res){
	// fs.readFile('stream_copy_logo.png',function(err,data){
	// 	if(err){
	// 		res.end('file not exist!')
	// 	}
	// 	else{
	// 		res.writeHeader(200,{'Content-Type':'text/html'})
	// 		res.end(data)
	// 	}
	// })

	fs.createReadStream('stream_copy_logo.png').pipe(res)
})
.listen(8090)