function $(id) {
	return document.getElementById(id);
}

var Spotify = require('spotify-web-api-js');
var s = new Spotify();

//var spotifyApi = new SpotifyWebApi();  // Instantiate the js wrapper.

// Get a list of all tracks.
// For the track, find the correct YouTube video.

function getAllTrackIdsForQuery(query) {
	// search tracks whose name, album or artist contains query
	trackIDs = s.searchTracks(query)
  		.then(function(data) {
    		console.log('Search by "' + query + '"', data);
  		}, function(err) {
			console.error(err);
 		});
 	
 	return trackIDs;
}

function getAllTrackIdsForQueryTest() {
	const query1 = '';
	const result1 = getAllTrackIdsForQuery(query1);
	print(result1);
	
	const query2 = '1l234hlahdfa784rklasf134';
	const result2 = getAllTrackIdsForQuery(query2);
	print(result2);
	
	const query3 = 'love';
	const result3 = getAllTrackIdsForQuery(query3);
	print(result3);
	
	const query4 = 'love is';
	const result4 = getAllTrackIdsForQuery(query4);
	print(result4);
}

getAllTrackIdsForQueryTest();