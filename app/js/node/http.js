const http=require('http')
const url=require('url');
const path = require('path');
const fs=require('fs')

let root = path.resolve(process.argv[2] || '.');

function success(response, filePath) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(filePath).pipe(response);
}

function failure(response, errString) {
    response.writeHead(404, {'Content-Type': 'text/html', 'charset': 'utf-8'});
    response.end(errString);
}


var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;   //  /

    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);

    fs.stat(filepath,function(err,stats){
    	if(err){
    		console.log('文件不存在');
    		failure(response,'<h2>404 File Not Found文件不存在</h2>')
    	}else{
    		if(stats.isFile()){
    			console.log('请求的是文件');
                success(response, filepath);
    		}else if(stats.isDirectory()){
    			console.log('请求的是目录');
                // 寻找该目录下的 index.html 或者 default.html
                isDir(response, filepath);
    		}
    	}
    })
});

function isDir(response, dir) {
	try{
		if(fs.existsSync(path.join(dir,'index.html'))){
			success(response, path.join(dir, 'index.html'));
		}else if(fs.existsSync(path.join(dir,'default.html'))){
			success(response, path.join(dir, 'default.html'));
		}else{
			 failure(response, '<h1>404 not exist first page</h1>');
		}
	}catch(err
		){
         failure(response, '<h1>404 文件不存在!!!</h1>');
	}
}

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');











// let server = http.createServer(function(request,response){
// 	console.log(request.method + ' :' + request.url)

// 	response.writeHead(404, {'Content-Tppe' : 'text/html'});

// 	response.end('<h1>hello world!!</h1>')
// 	// console.log(response)
// 	console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
// })

// server.listen(8080);

// console.log('Serving is running at http://localhost:8080')



// // 解析当前目录:
// var workDir = path.resolve('.'); // '/Users/michael'
// console.log(workDir)

// // 组合完整的文件路径:当前目录+'pub'+'index.html':
// var filePath = path.join(workDir, 'pub', 'index.html');
// console.log(filePath)