var express = require('express');
var mainController = require('./controllers/mainController');
var portNumber = process.env.PORT || 3000;

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// setup static files 
app.use(express.static('./public'));

//firing controllers
mainController(app);

//listening to port
app.listen(portNumber,'0.0.0.0',() => {
    console.log("You are now connected to port:" + portNumber + "\n");
});