var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;
    
    function printResults () {
      for (var i = 2; i <= process.argv.length-1; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 2; i <= process.argv.length - 1; i++) {
      httpGet(i)
    }