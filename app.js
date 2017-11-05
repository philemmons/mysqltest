const express = require('express');
const app = express();
const mysql = require('mysql');

app.use( express.logger() );

const connection = mysql.createConnection({
  host     : process.env.hKey,
  user     : process.env.uKey,
  password : process.env.pwKey,
  database : process.env.dbKey
});
 
connection.connect();

app.get('/', function( request, response ){
    connection.query('SELECT * FROM admin', function (error, results, fields) {
        if (error){
            console.log('Error: ', error);
            throw error;
        }
       response.send(['hello Millie!!!!', results]);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("creeping on "+ port);
});