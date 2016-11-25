/**
 * Created by Boykov D.A. on 9/21/2016.
 */
var express     = require('express');
var router     = express.Router();
var routerAuth=require('./controllers/auth.controller');
var routerUser=require('./controllers/user.controller');
var pageRouter=require('./controllers/page.controller');
router.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

router.use(pageRouter);
router.use(routerAuth);
router.use(routerUser);

module.exports=router;