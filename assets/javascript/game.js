
var wins = 0;
var losses = 0;
var guesses = 0;
var guesed ="";
var alphabet = "abcdefghijklmnopqrstuvwxyz";


var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("The Psychic picked: " + getRandomLetter);


document.onkeyup = function(event) {
    var userGuess = event.key
    console.log("The user guessed " + userGuess)
}
