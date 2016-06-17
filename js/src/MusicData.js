function $(id) {
	return document.getElementById(id);
}

var Spotify = require('spotify-web-api-js');  // Think of require as an import.
var s = new Spotify();

var spotifyApi = new SpotifyWebApi();  // Instantiate the js wrapper.

// Get a list of all tracks.
// For the track, find the correct YouTube video.

function getAllTrackIdsForQuery(query) {
	// search tracks whose name, album or artist contains query
	trackIDs = spotifyApi.searchTracks(query)
  		.then(function(data) {
    		console.log('Search by "' + query + '"', data);
  		}, function(err) {
			console.error(err);
 		});
 	
 	return trackIDs;
}

