const http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'再来一次试试',
	'mid':8837
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
		'Cache-Control':'no-cache',	
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=bec999e4-10c2-4840-8b02-ff4235740800; imooc_isnew_ct=1489651304; loginstate=1; apsid=VkYzcxMzNkNDQ1ZWU0YjNlMWFjNzExZGFjM2FhOTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjE5NDAxOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTc5NTAxNTkwQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGQwZjJiNDg3M2Q0OWJiOGMxYThiZThkNjRlZDZkNmQxa0bKWGtGylg%3DZG; last_login_username=1179501590%40qq.com; PHPSESSID=0scbmp13l3kv33lgsl13bt61o6; channel=491b6f5ab9637e8f6dffbbdd8806db9b_phpkecheng; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489770677,1489976923,1489985773,1490014900; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1490015020; imooc_isnew=2; cvde=58cfd2b03780b-23',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Pragma':'no-cache',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end',function(chunk){
		console.log('success');
	})
})

req.on('error',function(err){
	console.log('Error')
})

req.write(postData);

req.end()