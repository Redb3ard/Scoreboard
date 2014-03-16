function Scoreboard() {
  require('./schemas/Score');
  var mongoose = require('mongoose');
  var scoreboard = {};
  //TODO: Load configuration
  
  scoreboard.getTopScores = function(req, res, next) {
	var Score = mongoose.model('Score');
	Score.find(function(err, movies) {
		console.error(err);
	});
    //TODO: Return some scores
    res.send('Topscores!');
    return next();
	  
  }
	
  scoreboard.getTopScoresForGame = function(req, res, next) {
	res.send('Game topscores');
	return next();
  }
  
  scoreboard.getAllScoresByGame = function(req, res, next) {
	res.send('All scores for game');
	return next();
  }
  
  scoreboard.getPlayerScoresByGame = function(req, res, next) {
	res.send('Player scores for game.');
	return next();
  }
  
  scoreboard.createPlayerScore = function(req, res, next) {
    res.send("Player score created");
	return next();
  }
	
  return scoreboard;
}

module.exports = Scoreboard;

