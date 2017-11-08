//https://www.youtube.com/watch?v=2OGHdii_42

//https://www.npmjs.com/package/express-mysql-session

//https://codeburst.io/authenticating-node-js-using-php-sessions-cd1e15b21b53

const express = require('express');
const app = module.exports = express();
const mysql = require('mysql');



app.use( express.logger() );

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "db_name",
    });
};

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

app.get('/', function( request, response ){
    connection.query('SELECT * FROM admin', function (error, results, fields) {
        if (error){
            console.log('Error: ', error);
            throw error;
        }
      response.send(['hello Millie!!!!', results]);
    });
});


//  clearDB
                
// const connection = mysql.createConnection({
//   host     : process.env.hKey,
//   user     : process.env.uKey,
//   password : process.env.pwKey,
//   database : process.env.dbKey
// });
 
// connection.connect();

// app.get('/', function( request, response ){
//     connection.query('SELECT * FROM admin', function (error, results, fields) {
//         if (error){
//             console.log('Error: ', error);
//             throw error;
//         }
//       response.send(['hello Millie!!!!', results]);
//     });
// });

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("creeping on "+ port);
});