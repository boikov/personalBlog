/**
 * Created by Boykov D.A. on 9/21/2016.
 */
exports.JSON = function (req, res, next) {
	var body = [];
	req.on('data', function (chunk) {
		body.push(chunk);
	}).on('end', function () {
		body     = Buffer.concat(body).toString();
		body     = JSON.parse(body);
		req.body = body;
		next();
	});
};