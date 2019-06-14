
var numberOfWins = 0;
var losses = 0;
var guesses = 0;
var userGuessed = [];
var computerGussed = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numGuess = "10"


// Generate random letter for computer guess

var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("The Psychic picked: " + getRandomLetter);


// Create user variable for user guess on key press
document.onkeyup = function(event) {
    var userGuess = event.key
    userGuessed.push(userGuess);
    var guess = document.getElementById("history");
    guess.textContent = "Previous guesses: " + userGuessed;
    console.log(userGuessed);
    console.log("The user userGuessed " + userGuess);

    // If the users guesses the right anwser


    if(userGuess === getRandomLetter) {
        console.log("Looks like you userGuessed the righ anwser");
        numberOfWins++;
        var wins = document.getElementById("wins");
        wins.textContent = "Number of Wins: " + numberOfWins;
        console.log(numberOfWins);
        numGuess = 10;
        userGuessed = [];
        // var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log("The Psychic picked a new letter: " + getRandomLetter);
        // If the user gets the wrongn anwser
        }else {
            if(userGuess !== getRandomLetter) {
                console.log("Looks like you userGuessed the wrong anwser");
                numGuess--;
                var wrong = document.getElementById("remaining");
                wrong.textContent = "Guesses remaning: " + numGuess;
                var loss = document.getElementById("losses");
                loss.textContent = "Number of losses: " + losses;
                console.log(losses);
            } if(numGuess === 0) {
                numGuess = 10;
                losses++;
                userGuessed = [];
                var gameOver = document.getElementById("greeting");
                gameOver.textContent = "Guess what letter I'm thinking of......Sorry game over!!!!!";
                }

        }
};