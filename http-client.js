var http = require('http');
http.get(process.argv[2], function(res){
	// res object - Stream object -> emit evetns
	res.on('data', function(data){
		console.log(data.toString());
	});	
})