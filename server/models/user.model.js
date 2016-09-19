/**
 * Created by Boykov D.A. on 9/19/2016.
 */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    password: String,
    email: String,
    token: String
});

module.exports = mongoose.model('User', userSchema);