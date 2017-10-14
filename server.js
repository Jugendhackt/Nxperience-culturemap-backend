
var myParser = require("body-parser");
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/nxperienceModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nxperiencedb');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/nxperienceRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);


//Middleware to respond better on incoming requests
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

//Import the necessary libraries/declare the necessary objects
var app = express();

console.log('Post-server erfolgreich gestartet');

app.use(myParser.urlencoded({extended : true}));
app.post("/vid", function(request, response) {
    console.log(request.body);
});

app.listen(3001);