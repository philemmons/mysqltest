const express = require('express');
const app = express();

app.use( express.logger() );

app.get('/', function( request, response ){
    response.send('hello world');
})

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("creeping on "+ port);
})