function Scoreboard() {
  var scoreboard = {};
  //TODO: Load configuration
  
  scoreboard.getTopScores = function(req, res, next) {
    //TODO: Smack out some database scores.
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

