/**
 * Created by Boykov D. on 11/26/2016.
 */
var express = require('express');
var router  = express.Router();
var path = require('path');
var localPath=__dirname.replace('\\server\\controllers','');
console.log(localPath);
router.get('/auth', function(req, res) {
	res.sendFile(path.join(localPath + '/public/index.html'));
});

module.exports = router;