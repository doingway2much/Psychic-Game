
var numberOfWins = 0;
var losses = 0;
var guesses = 0;
var userGuessed = [];
var computerGuessed = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numGuess = "10"

    // Function that generates random letter for computer guess
    window.onload = function() {
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerGuessed.push(getRandomLetter);
        console.log("The Psychic picked: " + computerGuessed[0]);
        }

// Create user variable for user guess on key press
document.onkeyup = function(event) {
    var userGuess = event.key
    userGuessed.push(userGuess);
    
    //Pass 
    var guess = document.getElementById("history");
    guess.textContent = userGuessed;
    console.log(userGuessed);
    console.log("The user guessed " + userGuess);

    var gameOver = document.getElementById("gameover");
    gameOver.textContent = "";

    // If the users guesses the right anwser

    if(userGuess === computerGuessed[0]) {
        console.log("Looks like you guessed the righ anwser");
        numberOfWins++;
        var wins = document.getElementById("wins");
        wins.textContent = "Wins: " + numberOfWins;
        console.log(numberOfWins);
        numGuess = 10;
        userGuessed = [];
        var tada = new Audio("assets/sounds/tada.mp3");
        tada.play();
        var gameOver = document.getElementById("gameover");
        gameOver.textContent = "Impressive!!!!!!"
        computerGuessed.length = 0;
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerGuessed.push(getRandomLetter);
        console.log("The Psychic picked another letter: " + computerGuessed[0]);
        }else {
            if(userGuess !== computerGuessed[0]) {
                console.log("Looks like you guessed the wrong anwser");
                numGuess--;
                var wrong = document.getElementById("remaining");
                wrong.textContent = "Guesses remaning: " + numGuess;
                var loss = document.getElementById("losses");
                loss.textContent = "Losses: " + losses;
                console.log(losses);
            } if(numGuess === 0) {
                numGuess = 10;
                losses++;
                userGuessed = [];
                var tada = new Audio("assets/sounds/horn.mp3");
                tada.play();
                var gameOver = document.getElementById("gameover");
                gameOver.textContent = "Hit any key!!!!!!"
                computerGuessed.length = 0;
                var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                computerGuessed.push(getRandomLetter);
                console.log("The Psychic picked another letter: " + computerGuessed[0]);
                }

        }
};