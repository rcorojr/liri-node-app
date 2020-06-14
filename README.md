LIRI Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

What Each Command Should Do

BandsInTown Query

node liri.js concert-this <artist/band name here>


This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


Name of the venue


Venue location


Date of the Event (use moment to format this as "MM/DD/YYYY")

Spotify Query

node liri.js spotify-this-song '<song name here>'


This will show the following information about the song in your terminal/bash window


Artist(s)


The song's name


A preview link of the song from Spotify


The album that the song is from

OMDB movie Query

node liri.js movie-this '<movie name here>'


This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'




