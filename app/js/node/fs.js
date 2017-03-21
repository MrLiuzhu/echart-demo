const fs=require('fs')






//同步 获取文件状态

const stat = fs.statSync('test.txt');

		        // 是否是文件:
// console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//  console.log('isDirectory: ' + stat.isDirectory());
//   if (stat.isFile()) {
//         // 文件大小:
//  console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//     console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//     console.log('modified time: ' + stat.mtime);
//   }
//   console.log(stat)



// console.log('direct')



//异步 获取文件状态

fs.stat('./',function(err,stat){
	if(err){
		console.log(err)
	}else{
		        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
        console.log(stat)
	}
})

//同步写文件
// let data='tongbu hello';
// fs.writeFileSync('output.txt',data);

//异步写文件
// var data = 'Hello, Noddse.js';
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });


//异步读取文件

// fs.readFile('test.txt',function(err,data){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data);
// 		console.log(data.toString('utf-8'));
// 	}
// })


//同步读取文件

// try{
// 	var data = fs.readFileSync('test.txt', 'utf-8');
// 	console.log(data);
// }catch(err){
// 	console.log(err)
// }

