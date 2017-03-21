const http=require('http');
const cheerio = require('cheerio');
const Promise = require('bluebird');

let baseurl = 'http://www.imooc.com/learn/';

var url="http://www.imooc.com/learn/348";


function getPageAsync(url){
	return new Promise((resolve,reject)=>{
		console.log('正在爬取....');

		http.get(url,function(res){
			var html='';

			res.on('data',function(data){
				html+=data;
			})

			res.on('end',function(){
				resolve(html);
				// let courseData = filterChapter(html);

				// printCourseData(courseData);
			})
		}).on('error',function(err){
			reject(e)
			console.log('err...');
		})

	})
}


let fetchCourseArray = [];

let vedioIds = [348,637]

vedioIds.map((item,index)=>{
	fetchCourseArray.push(getPageAsync(baseurl+item));
})

Promise.all(fetchCourseArray)
	.then((pages)=>{
		var coursesData = [];

		pages.forEach(function(html){
			var courses = filterChapter(html);
			coursesData.push(courses);
		})

		printCourseData(coursesData)
	})



function filterChapter(html){
	let $ = cheerio.load(html);

	var chapters=$('.chapter');

	var title = $('.course-infos .w .hd h2').text();

	// console.log(number)


 // courseData = {
 // 	title:title,
 // 	number:number,
 // 	videos:	[{
	// 	chapterTitle:'',
	// 	video:[
	// 		title:'',
	// 		id:''
	// 	]
	// }]
 // }


	let courseData={
			title:title,
			videos:[]
		};


	chapters.each(function(item){

		let chapter=$(this);

		$(".chapter-info").remove();

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

		courseData.videos.push(chapterData);
		
	})

	return courseData;
};

function printCourseData(coursesData){

	coursesData.map((courseData)=>{
		console.log(courseData.title + '\n');

		courseData.videos.map((item,index)=>{
			var chapterTitle = item.chapterTitle.trim();

			console.log(chapterTitle + '\n');
			item.videos.map((item,index)=>{
				console.log('  【' + item.id + '】  ' + item.title.trim() + '\n')
			})
		})

	})


}