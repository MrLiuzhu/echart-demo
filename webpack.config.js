var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
	entry : {
    	app: APP_PATH + '/js/app.js',
    	common: APP_PATH + '/js/common.js',
    	mixin: APP_PATH + '/js/mixin.js',
    	moment: APP_PATH + '/js/moment.js',
    	input: APP_PATH + '/js/input.js',
    	reactDayPickerSimpleCalendar: APP_PATH + '/js/reactDayPicker/SimpleCalendar.js',
    	selectTableDay: APP_PATH + '/js/reactDayPicker/SelectableDay.js',
    	disabledDays: APP_PATH + '/js/reactDayPicker/DisabledDays.js',
    	inputField: APP_PATH + '/js/reactDayPicker/InputField.js',
    	fixedNumberWeeks: APP_PATH + '/js/reactDayPicker/fixedNumberWeeks.js',
    	rangeOfDaysClick: APP_PATH + '/js/reactDayPicker/rangeOfDaysClick.js',
    	rangeDaysMouseEnter: APP_PATH + '/js/reactDayPicker/rangeDaysMouseEnter.js',
    	inputFieldWithOverlay: APP_PATH + '/js/reactDayPicker/inputFieldWithOverlay.js',
    	css3: APP_PATH + '/js/css3.js',
    	test: APP_PATH + '/js/test.js',
    	reactQuill: APP_PATH + '/js/reactQuill.js'
	},
	output: {
	    path: BUILD_PATH + '/js',
	    filename: '[name].js',
	    chunkFilename: "[id].js"
	},
	module : {
		loaders : [
		    {
		      test: /\.jsx?$/,
		      exclude: /node_modules/,
		      loader: 'babel',
		      query: {
		        presets: ['es2015','react']
		      }
		    },
		    {
			  test: /\.(png|jpg|gif)$/,
			  loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
			},
		      {
		        test: /\.css$/,
		        loader: 'style!css'
		      },
		    {
		        test: /\.scss$/,
		        loader: ExtractTextPlugin.extract(
		         "style-loader",
		         "css-loader!sass-loader"
		         // ,
		         // {
		         //   publicPath: "../"
		         // }
		       )
		       //loaders : ['style', 'css', 'sass']
		    },
		]
	},
	plugins: [ 
		new ExtractTextPlugin("../css/[name].css", {
	      disable: false,
	      allChunks: true
	    })
	] 
}
