var path = require('path')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
	entry : {
    	app: APP_PATH + '/app.js',
    	moment: APP_PATH + '/moment.js',
    	reactDayPickerSimpleCalendar: APP_PATH + '/reactDayPicker/SimpleCalendar.js',
    	selectTableDay: APP_PATH + '/reactDayPicker/SelectableDay.js',
    	disabledDays: APP_PATH + '/reactDayPicker/DisabledDays.js',
    	inputField: APP_PATH + '/reactDayPicker/InputField.js',
    	fixedNumberWeeks: APP_PATH + '/reactDayPicker/fixedNumberWeeks.js',
    	rangeOfDaysClick: APP_PATH + '/reactDayPicker/rangeOfDaysClick.js',
    	rangeDaysMouseEnter: APP_PATH + '/reactDayPicker/rangeDaysMouseEnter.js',
    	inputFieldWithOverlay: APP_PATH + '/reactDayPicker/inputFieldWithOverlay.js'
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
			}
		]
	}
}
