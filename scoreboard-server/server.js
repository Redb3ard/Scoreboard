var restify = require('restify');
var Scoreboard = require('./lib/ScoreboardResource.js');

var scores = Scoreboard();

var server = restify.createServer({ name: 'Scoreboard' });

server.get('/topscores', scores.getTopScores);

server.listen(8080, function() {
	console.log('%s started listening on port %s', server.name, server.url);
});