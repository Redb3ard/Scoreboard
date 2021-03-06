function Scoreboard() {
  require('./schemas/Score');
  var mongoose = require('mongoose');
  var Score = mongoose.model('Score');
  var scoreboard = {};
  //TODO: Load configuration
  
  scoreboard.getTopScores = function(req, res, next) {	
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
    req.log.info('Retrieving scores by game.');
	Score.findAllScoresByGame(req.params.game, function(err, scores) {
		if(err) {
			res.send(err);
		} else {
			res.json(scores);
		}
		return next();
	});
  }
  
  scoreboard.getPlayerScoresByGame = function(req, res, next) {
    Score.findAllScoreByGameAndPlayer(req.params.player,
								      req.params.game,
									  function(err, scores) {
									    if(err){
										  res.send(err);
										} else {
										  res.json(scores);
										}
										return next();
									  })	
  }
  
  scoreboard.createPlayerScore = function(req, res, next) {
	if(req.is('json')) {
	  //TODO: Add some request validation
	  var score = new Score({game: req.body.game,
							 score: req.body.score,
							 playerId: req.body.player});
      score.save();
	  var location = req.header('HOST')+'/scoreboard/' + score.game + '/scores';
	  res.header('Location',location);
      res.send(201,"Player score created");
	} else {
	  res.send(400,'Invalid request payload!');
	}
	return next();
  }
	
  return scoreboard;
}

module.exports = Scoreboard;

