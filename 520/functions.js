/*
 * http://www.mycodes.net
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 50); // Adjusted from 75ms to 50ms to make the effect faster
        });
        return this;
    };
})(jQuery);


function timeElapse(date) {
    var current = new Date(); // Current time
    var seconds = (current - date) / 1000; // Total seconds since start date
    
    var days = Math.floor(seconds / (3600 * 24)); // Convert seconds to days
    seconds -= days * 3600 * 24; // Subtract the days in seconds from total
    
    var hours = Math.floor(seconds / 3600); // Convert remaining seconds to hours
    seconds -= hours * 3600; // Subtract the hours in seconds from total
    
    var minutes = Math.floor(seconds / 60); // Convert remaining seconds to minutes
    seconds -= minutes * 60; // Subtract the minutes in seconds from total
    
    seconds = Math.floor(seconds); // Ensure seconds is an integer
    
    var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
    $("#clock").html(result);
}

// Set the starting date to December 1st, 2021
var startingDate = new Date("December 1, 2021 00:00:00");

// Assuming you're using this script in an environment where jQuery is available
// Call the function with the starting date
timeElapse(startingDate);

// If you need this to update in real-time on a webpage, you might want to call this function
// repeatedly using setInterval
setInterval(function() {
    timeElapse(startingDate);
}, 1000); // Update every second



