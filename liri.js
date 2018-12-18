require("dotenv").config();
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var spotify = new spotify (keys.spotify);
var axios = require("axios");
var fs = require ("fs");
var moment = require ('moment');

var pro = process.argv [2];
var term = process.argv.slice(3).join('');
var term1 = process.argv.slice(3).join('+')
if (pro === "spotify-this-song") {
    callSpotify(term);
} else if (pro === "concert-this"){
    callBandsInTown(term);
} else if (pro === "movie-this") {
    call0mdb(term1);
} else if (pro === "do-what-it-says") {
    fs.readFile ('random.txt', 'utf8', (error, data) => {
    })
}

function callSpotify(song) {
    spotify
.search({type: 'track', query:song })
.then(function(response) {
    var data = response.tracks.items[0]
    var showData = [
        "Artist(s): " + data.artists[0],
        "Song Name: " + data.name,
        "Link: " + data.external_urls.spotify,
        "Album: " + data.album.name
    ] .join("\n\n");
        console.log(showData);
}) 
.catch(function(error) {
    console.log(error);
});
}

function call0mdb(movie){
    var URL = "http://www.omdbapi.com/?t=" + movie + "&apikey-103d81dd"
    axios.get(URL)
    .then(function(response) {
        var data = response.data;
        var showData = [
            "Title: " + data.Title,
            "Year: " + data.year,
            "IMDB rating: " + data.imdbRating,
            "Rotten Tomatoes rating: " + data.Ratings[1].Value,
            "Country: " + data.Country,
            "Language: " + data.Language,
            "Plot: " + data.Plot,
            "Actors: " + data.Actors
        ].join("\n\n");
        console.log(showData);
    })

}