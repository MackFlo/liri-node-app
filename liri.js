var fs= require("fs");
var dotenv= require("dotenv").config();
var inquirer= require("inquirer");
var request = require("request");
var twitter= require ("twitter");
var Spotify= require ("node-spotify-api");

var twitterSearch = (process.argv[2] === "my-tweets");
var spotifySearch = (process.argv[2] === "spotify-this-song");
var movieSearch = (process.argv[2] === "movie-this");
var doWhatItSays = (process.argv[2] === "do-what-it-says");
var specificSearch = process.argv[3]
//not sure I understand how the file is supposed to read the information on ".env"
function makeSearch(){
if (twitterSearch){
  var params = {screen_name: '_kenzflo'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    } else {
        throw error
    }
  });
//where would I start the "if statement" for the backup search?
} else if (spotifySearch){
 
spotify.search({ type: 'track', query: specificSearch }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log ("Artist: " + data.Artist + "Song: " + data.song + "Click the following link to hear the song: " + data.url + "Album: " + data.album) 
  })
}
 else if (movieSearch){

    console.log (movie-search)
    var OMDBUrl = "http://www.omdbapi.com/?t=" + specificSearch + "&y=&plot=short&apikey=trilogy";
    console.log(OMDBUrl);
    request(OMDBUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).Title + "Release Year: " + JSON.parse(body).Year + "IMDB Rating" + JSON.parse(body).imdbRating + "Language" + JSON.parse(body).Language + "Movie Plot: " + JSON.parse(body).Plot + "Actors in the Movie: " + JSON.parse(body).Actors);
}
  })
}
else if (doWhatItSays){
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }
    console.log(data);
    }
)}
else {
    console.log ("\nNOT A WORKING COMMAND.TRY: my-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says\n")
};
}
