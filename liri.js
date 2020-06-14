//required packages

var dotenv = require('dotenv').config()
var keys = require("./keys.js");
var axios = require("axios")
var spotify = require("node-spotify-api")
var moment = require ("moment")
var keys = require("./keys")

var userTopic = process.argv[2];
var userInput = process.argv[3];


//topic selector
switch (userTopic){

  case "concert-this":
    concertData(userInput);
    break;

    case "spotify-this-song":
    spotifyData(userInput);
    break;

  case "movie-this":
    movieData(userInput);
    break;

  case "do-what-it-says":
    doData(userInput);
    break;

};

//movie search

// var movieName = process.argv[2];



function movieData(movieName){

var queryUrlMov = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=1fb3acc8";
axios.get(queryUrlMov).then(
    function(response){
      if (response.data.Title != undefined){
      console.log("Title: " + response.data.Title);  
      console.log("Release Year: " + response.data.Released);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotton Tomatoes rating: " + response.data.Ratings[1].Value);
      console.log("Country produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      } 
      else {
        movieData("Mr. Nobody");
      }
    }
) .catch(function(error){
  console.log(error);
  console.log("No Results");
  }
)};







// // //Access Spotify
// var spotify = new Spotify(keys.spotify);
// function spotifyData(inputParameter) {
//   if (inputParameter === undefined) {
//       inputParameter = "The Sign"; //default Song
//   }
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
// } 