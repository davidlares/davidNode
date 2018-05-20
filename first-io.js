var fs = require('fs');
var read = fs.readFileSync(process.argv[2], {'encoding': 'utf-8'});
console.log(read.split('\n').length - 1);