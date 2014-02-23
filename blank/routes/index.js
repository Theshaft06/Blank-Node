module.exports = function Route(app) {
	app.get('/', function (req, res) {
		res.render('index', {title: 'Welcome Page'});
	});

	app.post('/process', function (req, res) {
		console.log('POST INFO', req.body);
		req.session.name = req.body.my_name;
		req.session.email = req.body.email;
		req.session.sessionID = req.sessionID;
		req.session.save(function() {
			res.redirect('/');
		});
	});
}