/**
 * Created by Boykov D.A. on 9/21/2016.
 */

var express      = require('express');
var router       = express.Router();
var User         = require('../models/user.model');
var jwt          = require("jsonwebtoken");
var serverConfig = require('../config/server.config');
var bodyParser   = require('../middlewares/requestBodyParse.middleware');
var jwtSecret    = serverConfig.jwtKey;

router.post('/authenticate', bodyParser.JSON, function (req, res) {
	User.authorization(req.body.email, req.body.password, function (err, user) {
		if (err) {
			res.status(404).send(err);
		}
		if (user) {
			res.json({
				type : true,
				token: user.token
			});
		}
	});
});

router.post('/signin', bodyParser.JSON, function (req, res) {
	User.create(req.body.email, req.body.password, function (err, user) {
		if (err) {
			res.status(403).send(err);
		}
		if (user) {
			var token = jwt.sign(user, jwtSecret);
			User.setToken(user, token, function (err, user1) {
				res.json({
					type : true,
					token: user1.token
				});
			});
		}
	});
});

module.exports = router;