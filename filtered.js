var fs = require('fs');
var ext = '.' + process.argv[3];
var path = require('path');

fs.readdir(process.argv[2],function(err,data){
	if(err) return err;
	var result = data.filter(i => path.extname(i) === ext);
	result.forEach(function(d){
		console.log(d);
	});
});