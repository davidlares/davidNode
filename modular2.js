var fs = require('fs');

module.exports = function(dir,ext,callback){

	var fullext = '.'+ ext;

		fs.readdir(dir, function(err,data) {
		
			if(err) return callback(err);
			
			var list = data.filter(function(file) {	
			 	if(file.indexOf(fullext) >= 0){
			 		return file;
			 	}
			});
			
			return callback(null, list); // esto es un closure

		});
}