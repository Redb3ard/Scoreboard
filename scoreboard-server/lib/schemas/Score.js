var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
	game: String,
	playerId: String,
	score: Number,
	created: { type: Date, default: Date.now}
});


/*
 *Static methods for querying
 */
ScoreSchema.statics.findAllScoresByGame = function(gameName,callback) {
	this.find({game: gameName},callback);
}

ScoreSchema.statics.findAllScoreByGameAndPlayer = function(playerId, gameName) {
	this.find({game: gameName, playerId: playerId});
}


var Score = mongoose.model('Score', ScoreSchema);


//module.exports.Score = Score;
