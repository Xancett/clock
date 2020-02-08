// Set times for events: wake up, sleep, lunch, party
// Set party button (changes to end party)
var age = 'baby';
var activity = document.getElementById('activity');
var time = document.getElementById('time');
var adultImage = document.getElementById('image');
var ageButton = document.getElementById('AgeButton');

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

// Changes the main image based on the selected value of the drop down and the current age selection
function changeImage() {
    let myActivity = activity.options[activity.selectedIndex].value;
    adultImage.src='images/' + age.toString() + '/' + myActivity.toString() + '.png';
}

// Changes the current age selection
function changeAge() {
    age = (age == 'baby' ? 'adult' : 'baby');
    // Change image
    changeImage();
    // Change text of the button
    if (age == 'baby') {
        ageButton.innerHTML = 'Click to see me as an adult'
    } else {
        ageButton.innerHTML = 'Click to see me as a baby';
    }
    
}

displayClock();
changeImage();

// Event listener
ageButton.addEventListener('click', () => {
    changeAge();
})
activity.addEventListener('click', () => {
    changeImage();
})