/**
 * Created by boykov on 9/18/2016.
 */

var express     = require('express');
var morgan      = require("morgan");
var mongoose    = require("mongoose");
var mongoConfig = require('./config/db.config');
var serverConfig=require('./config/server.config');
var routers     = require('./routers');
var app         = express();

mongoose.connect(mongoConfig.url);
app.use(morgan("dev"));
app.use(routers);
app.use(express.static('public'));

process.on('uncaughtException', function (err) {
	console.log(err);
});

app.listen(serverConfig.port, function () {
	console.log("Server start on "+serverConfig.port+" port");
});