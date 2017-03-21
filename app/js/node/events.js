var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(12);


life.on('anwei',function(who){
	console.log('给' + who  + 'anweo');
})

life.on('anwei',function(who){
	console.log('给' + who  + '2');
})

life.on('anwei',function(who){
	console.log('给' + who  + '3');
})

life.on('anwei',function(who){
	console.log('给' + who  + '4');
})

life.on('anwei',function(who){
	console.log('给' + who  + '5');
})

life.on('anwei',function(who){
	console.log('给' + who  + '6');
})

life.on('anwei',function(who){
	console.log('给' + who  + '7');
})

life.on('anwei',function(who){
	console.log('给' + who  + '8');
})

life.on('anwei',function(who){
	console.log('给' + who  + '8');
})

life.on('anwei',function(who){
	console.log('给' + who  + '10');
})

life.on('anwei',function(who){
	console.log('给' + who  + '111');
})



//执行事件  
life.emit('anwei','hand');

console.log(life.listeners().length)


// 移除事件监听  function 为相应的监听函数
life.removeListener('anwei',function)

// 移除所有事件监听
life.removeAllListeners('anwei');

//查看有多少监听事件
life.listeners('anwei').length;
