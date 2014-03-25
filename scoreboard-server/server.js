var restify = require('restify'),
  bunyan = require('bunyan'),
  config = require('./config/config.js'),
  Scoreboard = require('./lib/ScoreboardResource.js'),
  mongoose = require('mongoose'),
  scores = Scoreboard();

mongoose.connect(config.db.url);
	var db = mongoose.connection;
	db.on('error', function(err) {
		console.log(err);
		console.log('Shutting down...');
		process.exit(1);
	});
    db.once('open', function callback () {
		console.log('Connected to db at %s',config.db.url);
});

var logger = bunyan.createLogger({name:'ScoreboardApp'});
var server = restify.createServer({ name: 'Scoreboard' , log: logger });
server.use(restify.bodyParser());

/*
 *API
 */
server.get('/scoreboard/topscores', scores.getTopScores);
server.get('/scoreboard/:game/scores', scores.getAllScoresByGame);
server.post('/scoreboard', scores.createPlayerScore);

server.listen(config.listenPort, function() {
	
	console.log('%s started listening on port %s', server.name, server.url);
});