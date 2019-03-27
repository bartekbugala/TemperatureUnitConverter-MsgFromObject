'use strict';

// get divs by ID
var output = document.getElementById('greeter-output');
var outputTempToF = document.getElementById('temp-f-output');
var outputTempToC = document.getElementById('temp-c-output');

// add content to divs
output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;
outputTempToF.innerHTML = 'Click the button! If you want to convert °C to °F!' + '<br><br>' + outputTempToF.innerHTML;
outputTempToC.innerHTML = 'Click the button! If you want to convert °F to °C!' + '<br><br>' + outputTempToC.innerHTML;

// get buttons by id
var button = document.getElementById('greeter-button');
var buttonTempToF = document.getElementById('temp-f-button');
var buttonTempToC = document.getElementById('temp-c-button');

// declare input variables
var userName;
var tempC;
var tempF;

// regex const declarations
const alphaExp = /^[a-zA-Z]|[ ]+$/;
const numExp = /^[-0-9]+$/;

// functions

// convert celsius to Fahrenheit
function celsiusToFahrenheit(tempC) {
    var tempF = (tempC * 1.8) + 32;
    return round(tempF);
}
// convert Fahrenheit to Celsius
function fahrenheitToCelsius(tempF) {
    var tempC = (tempF - 32) / 1.8;
    return round(tempC);
}
// round given decimal paces (default value is 2)
function round(num, decimal = 2) {
    var multiplier = Math.pow(10, decimal);
    return Math.round(num * multiplier) / multiplier;
}

// function to check if user is set if not display default name
function isSetUserName() {
    var userName2
    userName == undefined ? userName2 = 'Mr Anonymous' : userName2 = userName;
    return userName2;
}

function tempMessage(tempC) {
    var msg;
    if (tempC <= 0){
     msg = 'Water freezes, You should wear winter clothing!';
    }
    else if ( tempC > 0 && tempC < 10){
     msg = 'Its cold, wear a hat!';
    }
    else if ( tempC >= 10 && tempC < 18){
     msg = 'You can wear a coat! It is getting warmer!';
    }
    else if ( tempC >= 18 && tempC <= 28){
     msg =  'It is definately summer, or you are in your apartament';
    }
    else if ( tempC > 28 && tempC < 100){
     msg =  'I\'s getting hot in here! THE ROOF IS ON FIRE';
    }
    else if ( tempC >= 100 && tempC < 525){
     msg =   'Water is boiling or evaporates. You are dead or wear a firefighter suit!';
    }
    else if ( tempC >= 525 && tempC < 5505){
     msg =  'Black hole sun won\'t you come!';
    }
    else if (tempC >= 5505){
     msg =  'Most probably you can\'t recieve this message';
    }
    return msg;   
 }
 

console.log(tempMessage(20));

// adding listeners (waiting for mouse click) to buttons

// @userName
button.addEventListener('click', function () {

    // Checking if the user name is set
    if (typeof userName !== 'string') {
        userName = window.prompt('What is your name?');
    }
    // declaration of iteration variable
    var i = 5;

    while (/[ ]+$/.test(userName) || (!alphaExp.test(userName) || typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i > 0) {
        // declaring const
        const triesString = 'Tries left: ';

        // Checking if input is not a string!
        if (typeof userName !== 'string') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'No Input! What is your real name?' + triesString + i);
        }
        // Checking if input is empty (no input)
        else if (userName === '') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'Empty field! What is your real name?' + triesString + i);
        }
        // Checking if input is a number (not isNaN)
        else if (!isNaN(userName) && !/[ ]+$/.test(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' consisting of a number) ' + 'A Number? Are you an alien? What is your real name?' + triesString + i);
        }
        // Checking if input has spaces
        else if (/[ ]+$/.test(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' containing spaces) ' + 'Prohibited! No Injection hacks my Friend! What is your real name?' + triesString + i);
        }
        // Checking if input has prohibited characters
        else if (!alphaExp.test(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' containing non alphabetical characters) ' + 'Prohibited! No Injection hacks my Friend! What is your real name?' + triesString + i);
        }
        i--;
    }

    // If the iteration finished and tehre is still no input a value is assigned to userName variable
    if ((/[ ]+$/.test(userName) || !alphaExp.test(userName) || typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i === 0) {
        userName = 'Stubborn Individual';
    }

    // Display Message With user name @userName
    output.innerHTML = 'Hello ' + userName + '!' + '<br><br>' + output.innerHTML;
});

// @tempC
buttonTempToF.addEventListener('click', function () {

    // prompting for input @tempC
    tempC = window.prompt('Enter Temperature in Celsius ' + isSetUserName());
    // declaration of iteration variable
    var i = 5;

    while ((isNaN(tempC) || tempC === '' || /[ ]+$/.test(tempC)) && i > 0) {

        if (tempC === null) {
            break;
        }
        else if (tempC === '') {
            tempC = window.prompt('(Input: ' + typeof (tempC) + ') ' + 'Empty field! Please enter a number' + isSetUserName());
        }
        // Checking if input is a number (not isNaN)
        else if (isNaN(tempC)) {
            tempC = window.prompt('(Input: ' + typeof (tempC) + ' not a number) ' + isSetUserName() + ', please enter valid number');
        }
        // Checking if input has spaces
        else if (/[ ]+$/.test(tempC)) {
            tempC = window.prompt('(Input: ' + typeof (tempC) + ' containing spaces) ' + 'Prohibited! No Injection hacks ' + isSetUserName() + '! Enter a number!');
        }
        i--;
    }

    // Display Message With @tempC
    if (numExp.test(tempC)) {
    outputTempToF.innerHTML = 'The given temperature in Fahrenheit: ' + celsiusToFahrenheit(tempC) + '!' + '<br><br>' + tempMessage(tempC) + '<br><br>' + outputTempToF.innerHTML;
    }
});

// @tempF
buttonTempToC.addEventListener('click', function () {

    // prompting for input @tempC
    tempF = window.prompt('Enter Temperature in Fahrenheit ' + isSetUserName());
    // declaration of iteration variable
    var i = 5;

    while ((isNaN(tempF) || tempF === '' || /[ ]+$/.test(tempF)) && i > 0) {

        if (tempF === null) {
            break;
        }
        else if (tempF === '') {
            tempF = window.prompt('(Input: ' + typeof (tempF) + ') ' + 'Empty field! Please enter a number'+ isSetUserName());
        }
        // Checking if input is a number (not isNaN)
        else if (isNaN(tempF)) {
            tempC = window.prompt('(Input: ' + typeof (tempF) + ' not a number) ' + isSetUserName() + ', please enter valid number');
        }
        // Checking if input has spaces
        else if (/[ ]+$/.test(tempF)) {
            tempF = window.prompt('(Input: ' + typeof (tempF) + ' containing spaces) ' + 'Prohibited! No Injection hacks '+ isSetUserName() + 'Enter a number!');
        }
        i--;
    }

    // Display Message With @tempF
    if (numExp.test(tempF)) {
    outputTempToC.innerHTML = 'The given temperature in Fahrenheit: ' + fahrenheitToCelsius(tempF) + '!' + '<br><br>' + tempMessage(fahrenheitToCelsius(tempF)) + '<br><br>' + outputTempToC.innerHTML;
    }
});