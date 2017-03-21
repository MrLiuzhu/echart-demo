const fs=require('fs');

let source = fs.readFileSync('../logo.png');

fs.writeFileSync('stream_copy_logo.png',source)