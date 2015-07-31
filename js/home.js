"use strict";

var rootAlbumDir = "assets/album-covers";

//list all the img names that you want to be albums

var albumImages = [
	{path: "nashville_cover.jpg", title: "Nashville", url: "albums/nashville/index.html"},
	{path: "sandiego_cover.jpg", title: "San Diego", url: "albums/san_diego/index.html"},
	{path: "bryce_cover.jpg", title: "Bryce Canyon", url: "albums/bryce_canyon/index.html"},
	{path: "florida_cover.jpg", title: "Florida", url: "albums/florida/index.html"}
];

//copy/paste each '{...}' for as many albums as you have
//Don't forget to have a comma after each '{}' (except the last one!)

//This following code is run when the page is loaded

$(document).ready(function () {
	// add the id of the `<div>` container that will hold
	// all of the album cover images below inside `$('')`
	// Remember: to select classes, start with a `.`
	// to select IDs, start with a `#`
	var $albumRow = $("#albumRow");

	// Create a new photo album object and give it the HTML
	// element that all albums cover `<img>` tags should be in
	// and a root directory for where the album cover images live
	
	var albums = AlbumFactory($albumRow, rootAlbumDir);
	
	// Load the album images!
	albums.loadImages(albumImages);

});
