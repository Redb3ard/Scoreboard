var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
	game: String,
	playerId: String,
	score: Number,
	created: { type: Date, default: Date.now}
});

var Score = mongoose.model('Score', ScoreSchema);

//module.exports.Score = Score;
