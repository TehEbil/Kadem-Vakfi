// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
	initialize();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})


function initialize()
{
	// Fertig Geladen
	getVideos();
}


function getVideos()
{
		
	markup_o = ""
	var firstVid = ""
	$$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCojx3Q0iOXImM6EGs9J078x909ar1J_4A&channelId=UC7oSNT3soKfhI2jsFHinXSA&part=snippet,id&order=date&maxResults=50', function( data )
	{
		//console.log(data["items"][0])
	  for(var key_s in data["items"])
	  {
		var string = data["items"][key_s]["snippet"]["title"];
		if(string.indexOf("Şahsiyet") === -1)
			continue;
		
		try	{	
			if (data["items"][key_s]["id"]["playlistId"] != undefined)
				continue;
		} catch(err) {
				console.log(err);
		}
		var pic = data["items"][key_s]["snippet"]["thumbnails"]["medium"];
		var url = pic["url"];
		
		var vidId = data["items"][key_s]["id"]["videoId"]
		
		if(firstVid == "")
			firstVid = vidId;
		
		var string2 = /\d/g;
		//var string2 = /\d{4}\d{2}\d{2}/g;
		var result = string.match(string2);
	
		var year = result[0] + result[1] + result[2] + result[3];
		var month = result[4] + result [5];
		var day = result[6] + result[7];
		
		var date = day + "." + month + "." + year;

		var realTitle = string.replace(/-?\d{8,}_*\d*/g,"");
		var lesson = (string.match(/_\d\d/g).toString()).replace(/_/g,"");
		realTitle += lesson;
		//markup_o += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe>';
		markup_o += '<div class="clVideos"> <a id="onChangeVideoClick" onclick="ChangeVideo(\''+ vidId + '\');"><img border="0" class="linksb" alt="111" src="' + url + '" width="160" height="90"></a><p>' + realTitle + '</p><p>' + date + '</p><br style="clear:both" /></div>\n';
		//markup_o += '<div class="clVideos"> <a id="onChangeVideoClick" onclick="ChangeVideo(\''+ vidId + '\');"><img border="0" class="linksb" alt="111" src="' + url + '" width="' + pic["width"] + '" height="' + pic["height"] + '"></a><p>' + realTitle + '</p><p>' + date + '</p><br style="clear:both" /></div>\n';
		//markup_o += '<div> <a onclick="ChangeVideo(' + vidId + ');" href="https://www.youtube.com/embed/' + vidId + '"><img border="0" alt="W3Schools" src="' + url + '" width="' + pic["width"] + '" height="' + pic["height"] + '"></a><p>' + string + '</p><p>' + date + '</p></div>';

	  }
	  $$("#idTest").html(markup_o);
	  
	  //$$("#vid1").attr("data-setup", '"techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}]')
	  
	  videojs("vid1").ready(function(){
	  var myPlayer = this;
	  myPlayer.src("https://www.youtube.com/watch?v=2HSSwu9IVqI");
	  // EXAMPLE: Start playing the video.

	});
	  
	  
	  //document.getElementById("vid1_html5_api").setAttribute("data-setup", 'techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}]'); 
	  
	  player = new YT.Player('player', {
	  height: '250',
	  width: '100%',
	  color: 'white',
	  playerVars: { fs:1 },
	  videoId: firstVid,
	  events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
	  }
	}); 
	  
	  //document.getElementById("idTest").innerHTML = "Paragraph changed!";
	});
}




 // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
		event.target.setPlaybackQuality('hd720');
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
	 if (event.data == YT.PlayerState.BUFFERING) {
		event.target.setPlaybackQuality('hd720');
	}
	if (event.data == YT.PlayerState.PLAYING && !done) {
		//setTimeout(function(){ $('idOnFullScreenPic').css("display: none;"); alert("Test"); }, 3000);
		//setTimeout(function(){ $('#idOnFullScreenPic').css("display: none;") }, 3000);
		
	  //setFull();
	  done = true;
	}
  }
  function stopVideo() {
	//player.stopVideo();
  }


function ChangeVideo(vidId)
{
	console.log(player);
	player.loadVideoById(vidId);

//	player.videoId = vidId;
//	player.playVideo();
	
	return false;
}


 
/*=== With Video ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
	photos : [
        '<iframe src="https://www.youtube.com/embed/2HSSwu9IVqI?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
	/*
    photos : [
	
        {
            html: '<iframe src="https://www.youtube.com/embed/2HSSwu9IVqI?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Aktuell'
        },
        {
            html: '<iframe src="https://www.youtube.com/embed/n6rB1_JG5JI?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Lektion 3'
        },
        {
            html: '<iframe src="https://www.youtube.com/embed/WwtvnWkATO4?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Lek 2'
        },
        {
            html: '<iframe src="https://www.youtube.com/embed/gU7lIfZIIAk?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Lek 1'
        },
        {
            html: '<iframe src="https://www.youtube.com/embed/FYX5vQf9bUs?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Begrüßung'
        },
    ],*/
    theme: 'dark',
    type: 'standalone',
	expositionHideCaptions: 'true',
	navbar: 'false',
	toolbar: 'false',
	backLinkText: 'Helloooo'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
	//myPhotoBrowserPopupDark.disableExposition();
});