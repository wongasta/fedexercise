//All needed modules
var express = require('express');

var app = express();
var port = process.env.PORT || 8000;

//Serve public content
app.use(express.static('public'));

//Handles all node middlewares
app.use(require('./util/midwares'));

//Set Views
app.set('views', 'public/');
app.set('view engine', 'ejs');

//Handles all API routing requests
app.use('/api', require('./routes/apiRoutes'));

//Handles all public routing requests
app.use('/', require('./routes/publicRoutes'));

//Start server
app.listen(port);
console.log('Sever started on port ' + port);
