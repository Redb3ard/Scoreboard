#Scoreboard
Scoreboard is a simple web service that aims to be a solution for storing game scores. The goal is to create clients that will message this service and store a player's score for you. The server will be written in node.js and clients obviously written in the desired language. 


##API(Work In Progress)
#####/scoreboard/topscores
>**GET:** Produces results of the top scores for all games that are configured in this service. The amount of top scores per game will be configurable. Initial settings will be 10.
>**STATUS: NOT-IMPLEMENTED**

#####/scoreboard/\<game\>/\<topscore\>
>**GET:** Produces only the topscores for given game. The number of scores returned is determined by the configured parameter.
>**STATUS: NOT-IMPLEMENTED**

#####/scoreboard/\<game\>/scores
>**GET:** Returns all scores for a given game.
>**STATUS: NOT-IMPLEMENTED**

####/\<game\>/\<scores\>/\<playerId\>
>**GET:** Gets all the games scores for a sepcific player
####/scoreboard
>**POST:** Creates a new player score entry for the game. Payload TBD.
>**STATUS: NOT-IMPLEMENTED**

##Configuring
>TBD

##How to run
1.) First install dependencies via npm install.
2.) Make sure you have a valid MongoDB instance running. Then proceed to configure the url in the config.js file.
3.) Run node server.js and start submitting some scores!
>TBD

##Clients
>TBD
