

// Pseudocode to show/hide (toggle) the navigation menu (narrow screens):

$("#menu-hamburger-button").click(function() {
    if ($("#menu").hasClass("hidden")) {
        $("#menu").removeClass("hidden");
    } else {
        $("#menu").addClass("hidden");
    }
});

//Pseudocode to hide the hamburger button and show the navigation bar when the window is resized too wide:

$(document).ready(function() {
    if ($(window).width() > 700) {
        $('#menu-hamburger-button').addClass('hidden');
        $('#menu').removeClass('hidden');
        console.log("wide screen")
    } else {
        $('#menu-hamburger-button').removeClass('hidden');
        $('#menu').addClass('hidden');
        console.log("narrow screen")
    }
});

$(window).resize(function() {
    if ($(window).width() > 700) {
        $('#menu-hamburger-button').addClass('hidden');
        $('#menu').removeClass('hidden');
        console.log("wide screen resize")
    } else {
        $('#menu-hamburger-button').removeClass('hidden');
        $('#menu').addClass('hidden');
        console.log("narrow screen resize")
    }
});
