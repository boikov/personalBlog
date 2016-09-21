/**
 * Created by Boykov D.A. on 9/21/2016.
 */

var express    = require('express');
var router     = express.Router();
var User       = require('../models/user.model');
var jwt        = require("jsonwebtoken");
var bodyParser = require('../middlewares/requestBodyParse.middleware');
var jwtSecret  = 'asdasdadas';

router.post('/authenticate', bodyParser.JSON, function (req, res) {
	User.authorization(req.body.email, req.body.password, function (err, user) {
		if (err) {
			res.status(500).send(err);
		}
		if (user) {
			res.json({
				type : true,
				token: user.token
			});
		} else {res.status(404).send("Incorrect password/email");
		}
	});
});

router.post('/signin', bodyParser.JSON, function (req, res) {
	User.create(req.body.email, req.body.password, function (err, user) {
		if (err) {
			res.status(500).send(err);
		}
		if (user) {
			var token = jwt.sign(user, jwtSecret);
			User.setToken(user, token, function (err, user1) {
				res.json({
					type : true,
					token: user1.token
				});
			});

		} else {
			res.status(403).send("User already exist");
		}
	});
});

module.exports = router;