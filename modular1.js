var mymodule = require('./modular2.js')
var ext = process.argv[3];
mymodule(process.argv[2],ext, function(err,data){
	if(err) return err;
	var list = data.filter(function(f){
		if(f.indexOf(ext) >= 0){
			console.log(f);
		}
	});
});