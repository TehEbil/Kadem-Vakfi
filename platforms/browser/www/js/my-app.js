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
    console.log("Device is ready2!");
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












          
var myApp = new Framework7(); 
 
var $$ = Dom7;
 
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});
 
/*=== Default standalone ===*/
var myPhotoBrowserStandalone = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ]
});
//Open photo browser on click
$$('.pb-standalone').on('click', function () {
    myPhotoBrowserStandalone.open();
});
 
/*=== Popup ===*/
var myPhotoBrowserPopup = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'popup'
});
$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});
 
/*=== As Page ===*/
var myPhotoBrowserPage = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});
 
/*=== Standalone Dark ===*/
var myPhotoBrowserDark = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark').on('click', function () {
    myPhotoBrowserDark.open();
});
 
/*=== Popup Dark ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    theme: 'dark',
    type: 'popup'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
}); 
 
/*=== With Captions ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            url: 'http://lorempixel.com/1024/1024/sports/1/',
            caption: 'Caption 1 Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        // This one without caption
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-captions').on('click', function () {
    myPhotoBrowserPopupDark.open();
});
 
/*=== With Video ===*/
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        {
            html: '<iframe src="https://www.youtube.com/embed/2HSSwu9IVqI?list=PLFr2AXO-26dMtaNuh5-Q8vu0kbhgmggKk" frameborder="0" allowfullscreen></iframe>',
            caption: 'Woodkid - Run Boy Run (Official HD Video)'
        },
        {
            url: 'https://i.ytimg.com/vi/yTuJ52HRE1I/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=m4fWwmlWKlrJya9wO_XeThZ20VY',
            caption: 'Second Caption Text'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Crested_Tern_Tasmania_(edit).jpg/300px-Crested_Tern_Tasmania_(edit).jpg',
        },
        {
            url: 'data:image/jpeg;base64,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',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('.pb-standalone-video').on('click', function () {
    myPhotoBrowserPopupDark.open();
});