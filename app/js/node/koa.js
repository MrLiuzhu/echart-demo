var express = require('express');
var fs = require('fs');
var app = express();



app.get('/test', function (req, res) {
    fs.readFile('/file1', function (err, data) {
        if (err) {
            res.status(500).send('read file1 error');
        }
        fs.readFile('/file2', function (err, data) {
        	console.log('111')
            if (err) {
                res.status(500).send('read file2 error');
            }
            res.type('text/plain');
            res.send(data);
        });
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});