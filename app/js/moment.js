var moment = require('moment');

var date = new Date();
console.log(date);


var day =moment.utc();

console.log(moment().valueOf().toDate())
console.log(moment().format('LLLL'))
console.log(moment().format('LLL'))
console.log(moment().format('LL'))
console.log(moment().format('L'))
var momentDate = moment({});
console.log(momentDate._d)