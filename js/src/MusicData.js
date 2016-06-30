function getAllElvisAlbums() {
	// search tracks whose name, album or artist contains query
	var unique = require('uniq');
	var Spotify = require('spotify-web-api-js');
	var s = new Spotify();
	
	// First, instantiate the wrapper.
	var spotifyApi = new SpotifyWebApi();
	
	// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
	spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
	  if (err) console.error(err);
	  else console.log('Artist albums', data);
	});
}


/// Test Functions 
// function getAllTrackIdsForQueryTest1() {
// 	var query1 = '';
// 	var result1 = getAllTrackIdsForQuery(query1);
// 	print(result1);
// }
// 
// function getAllTrackIdsForQueryTest2() {	
// 	var query2 = '1l234hlahdfa784rklasf134';
// 	var result2 = getAllTrackIdsForQuery(query2);
// 	print(result2);
// }
// 
// function getAllTrackIdsForQueryTest3() {	
// 	var query3 = 'love';
// 	var result3 = getAllTrackIdsForQuery(query3);
// 	print(result3);
// }
// 
// function getAllTrackIdsForQueryTest4() {	
// 	var query4 = 'love is';
// 	var result4 = getAllTrackIdsForQuery(query4);
// 	print(result4);
// }