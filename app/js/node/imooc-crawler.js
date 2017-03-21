const http=require('http');
const cheerio = require('cheerio');

var url="http://www.imooc.com/learn/348";

http.get(url,function(res){
	var html='';

	res.on('data',function(data){
		html+=data;
	})

	res.on('end',function(){
		let courseData = filterChapter(html);

		printCourseData(courseData);
	})
}).on('error',function(err){
	console.log('err...');
})


function filterChapter(html){
	let $ = cheerio.load(html);

	var chapters=$('.chapter');

	// [{
	// 	chapterTitle:'',
	// 	video:[
	// 		title:'',
	// 		id:''
	// 	]
	// }]

	let courseData=[];


	chapters.each(function(item){

		let chapter=$(this);
		let chapterTitle = chapter.find('strong').text();

		let videos = chapter.find('.video').children('li');

		let chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		};

		videos.each(function(item){
			let video = $(this).find('.J-media-item');
			let videoTitle = video.text();
			let id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		});

		courseData.push(chapterData);
		
	})

	return courseData;
};

function printCourseData(courseData){
	courseData.map((item,index)=>{
		var chapterTitle = item.chapterTitle;

		console.log(chapterTitle + '\n');
		item.videos.map((item,index)=>{
			console.log('  【' + item.id + '】  ' + item.title + '\n')
		})
	})
}