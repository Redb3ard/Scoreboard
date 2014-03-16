var config = {};

//Server listen port
config.listenPort = 8080;

//Database
config.db = { url: 'mongodb://localhost:27017/scoreboard'};

module.exports = config;