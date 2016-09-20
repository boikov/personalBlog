/**
 * Created by Boykov D.A. on 9/21/2016.
 */
var express          = require('express');
var router           = express.Router();
var ensureAuthorized = require('../middlewares/auth.middleware');
var User             = require('../models/user.model');

router.get('/me', ensureAuthorized, function (req, res) {
	User.getUser(req.token, function (err, user) {
		if (err) {
			res.json({
				type: false,
				data: "Error occured: " + err
			});
		} else {
			res.json({
				type: true,
				data: {
					email: user.email,
					id   : user._id
				}
			});
		}
	});
});

module.exports = router;