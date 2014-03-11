#Scoreboard
Scoreboard is a simple web service that aims to be a solution for storing game scores. The goal is to create clients that will message this service and store a player's score for you.


##API(Work In Progress)
#####/topscores
>**GET:** Produces results of the top scores for all games that are configured in this service. The amount of top scores per game will be configurable. Initial settings will be 10.
>STATUS: NOT-IMPLEMENTED

#####/\<game\>/\<topscore\>
>**GET:** Produces only the topscores for given game. The number of scores returned is determined by the configured parameter.
>STATUS: NOT-IMPLEMENTED

#####/\<game\>/\<scores\>
>**GET:** Returns all scores for a given game.
>STATUS: NOT-IMPLEMENTED

####/\<game\>/\<scores\>/\<playerId\>
>**GET:** Gets all the games scores for a sepcific player
>**POST:** Creates a new playre score entry for the game. Payload TBD.
>STATUS: NOT-IMPLEMENTED

##Configuring
>TBD

##How to run
>TBD

##Clients
>TBD
