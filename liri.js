//required packages

var dotenv = require('dotenv').config()
var keys = require("./keys.js");
var axios = require("axios")
var spotify = require("node-spotify-api")
var moment = require ("moment")

// //Access Spotify
// var spotify = new Spotify(keys.spotify);

//movie search

var movieName = process.argv[2];

var queryUrlMov = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=1fb3acc8";

console.log(queryUrlMov);


axios.get(queryUrlMov).then(
    function(response){
        console.log("The movie's release date is: " + response.data.Released);
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