// Set times for events: wake up, sleep, lunch, party
// Set party button (changes to end party)
var age = 'adult';
var activity = document.getElementById('activity');
var time = document.getElementById('time');
var adultImage = document.getElementById('image');

// Displays the clock
function displayClock() {
    // Create variable for current date
    var d = new Date();
    // Set html text to the prettified version of time
    time.innerHTML = prettyTime(d.getHours()) + ':' + prettyTime(d.getMinutes()) + ':' + prettyTime(d.getSeconds());
    // Update function every second
    var t = setTimeout(function() { displayClock() }, 1000);
}

// Makes the time look nicer by adding a zero before the number if less than 10
function prettyTime(time) {
    // If we don't have a zero before the value, add one
    if (parseInt(time) < 10){
        return '0' + time.toString();
    }
    return time.toString();
}

function changeImage() {
    if (age === 'adult') {
        adultImage.src='images/adult/cuddle.png';
        alert(activity);
    } else {

    }
}


displayClock();
changeImage();