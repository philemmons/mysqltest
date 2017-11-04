//  mysql://bfe389ed4f7e99:c2a177e1
//  us-cdbr-iron-east-05.cleardb.net
//  heroku_b2e68739923e353?reconnect=true
    



var express = require('express');
var app = express();
var mysql = require('mysql');
app.use( express.logger() );

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bfe389ed4f7e99',
  password : 'c2a177e1',
  database : 'heroku_b2e68739923e353'
});
 
connection.connect();



app.get('/', function( request, response ){
    connection.query('SELECT * FROM admin', function (error, results, fields) {
        if (error){
            console.log('Error: ', error);
            throw error;
        }
       response.send(['hello world  ', results]);
    });
 
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("creeping on "+ port);
});