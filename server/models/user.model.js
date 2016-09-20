/**
 * Created by Boykov D.A. on 9/19/2016.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	password: {type: String, required: [true]},
	email   : {type: String, required: [true]},
	token   : String
});
var UserModel  = mongoose.model('User', userSchema);

exports.create = function (email, password, callback) {
	UserModel.findOne({email: email}, function (err, user) {
		if (err) {
			callback(err);
		} else {
			if (!user) {
				var userModel      = new UserModel();
				userModel.email    = email;
				userModel.password = password;
				userModel.save(function (err, user) {
					callback(err, user);
				});
			} else {
				callback("user already exist");
			}
		}
	});
};

exports.getUser = function (token, callback) {
	UserModel.findOne({token: token}, function (err, user) {
		if (err) {
			callback(err);
		} else {
			callback(err, user);
		}
	});
};

exports.authorization = function (email, password, callback) {
	UserModel.findOne({email: email, password: password}, function (err, user) {
		if (err) {
			callback(err);
		} else {
			callback(err, user);
		}
	});
};

exports.setToken = function (user, token, callback) {
	user.token = token;
	user.save(function (err, user) {
		callback(err, user);
	});
};