var restify = require('restify');
var config = require('./config/config.js');
var Scoreboard = require('./lib/ScoreboardResource.js');
var mongoose = require('mongoose');

var scores = Scoreboard();

var server = restify.createServer({ name: 'Scoreboard' });

server.get('/topscores', scores.getTopScores);

server.listen(config.listenPort, function() {
	mongoose.connect(config.db.url);
	var db = mongoose.connection;
	db.on('error', console.error);
    db.once('open', function callback () {
		console.log('Connected to db at %s',config.db.url);
    });
	console.log('%s started listening on port %s', server.name, server.url);
});