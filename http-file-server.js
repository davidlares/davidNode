var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var file = fs.createReadStream(process.argv[3]);
	// req.pipe(file).pipe(res);
	file.pipe(res);
});

// convertimos el puerto en numero
server.listen(Number(process.argv[2]));