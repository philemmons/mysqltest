//https://www.youtube.com/watch?v=2OGHdii_42s
    
var express = require('express');
var app = express();
var mysql = require('mysql');
app.use( express.logger() );

let keys = {
    host: process.env.hostKey,
    user: process.env.userKey,
    password: process.env.pwKey,
    database: process.env.dbKey
}

var connection = mysql.createConnection({
  'host'     : keys.host,
  'user'     : keys.user,
  'password' : keys.password,
  'database' : keys.database
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