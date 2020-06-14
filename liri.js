//required packages

var dotenv = require('dotenv').config()
var keys = require("./keys.js");
var axios = require("axios")
var spotify = require("node-spotify-api")
var moment = require ("moment")
var keys = require("./keys")

var userTopic = "movie-this";
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



function movieData(){
  var movieName = "";
  for (var i = 3; i < userInput.length; i++){
      if (i > 3 && i < userInput.length){
          movieName = movieName + "+" + userInput[i];
      }
      else{
          movieName += userInput[i];
      }
  }
}

var queryUrlMov = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=1fb3acc8";
axios.get(queryUrlMov).then(
    function(response){
      console.log("Title: " + response.data.Title);  
      console.log("Release Year: " + responseswitch .data.Released);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotton Tomatoes rating: " + response.data.Ratings[1].Value);
      console.log("Country produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
)




.catch(function(error){
    if (error.response) {

        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

// // //Access Spotify
var spotify = new Spotify(keys.spotify);
function spotifyData(inputParameter) {
  if (inputParameter === undefined) {
      inputParameter = "The Sign"; //default Song
  }
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
} 