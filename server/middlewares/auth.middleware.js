/**
 * Created by Boykov D.A. on 9/21/2016.
 */

module.exports = function ensureAuthorized(req, res, next) {
	var bearerToken = req.headers["authorization"];
	if (typeof bearerToken !== 'undefined') {
		req.token = bearerToken;
		next();
	} else {
		res.send(403);
	}
};