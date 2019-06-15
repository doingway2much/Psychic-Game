
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
    
    // Add guess to history
    var guess = document.getElementById("history");
    guess.textContent = userGuessed;
    console.log("The user guessed " + userGuess);


    var gameOver = document.getElementById("gameover");
    gameOver.textContent = "";

    // If the users guesses the right anwser
    if(userGuess === computerGuessed[0]) {
        console.log("Looks like you guessed the righ anwser");
        numberOfWins++;
        // Update div with win
        var wins = document.getElementById("wins");
        wins.textContent = "Wins: " + numberOfWins;
        console.log(numberOfWins);
        // Reset variables
        numGuess = 10;
        userGuessed = [];

        // Play sound for win!!!!
        var tada = new Audio("assets/sounds/tada.mp3");
        tada.play();

        // Text anouncement for winner
        var gameOver = document.getElementById("gameover");
        gameOver.textContent = "Impressive!!!!!!"

        //  Reset guess length
        computerGuessed.length = 0;

        // Pick a new letter 
        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerGuessed.push(getRandomLetter);
        console.log("The Psychic picked another letter: " + computerGuessed[0]);
        }else {
            // If the users guesses the wrong anwser
            if(userGuess !== computerGuessed[0]) {
                console.log("Looks like you guessed the wrong anwser");
                numGuess--;
                var wrong = document.getElementById("remaining");
                wrong.textContent = "Guesses remaning: " + numGuess;
                var loss = document.getElementById("losses");
                loss.textContent = "Losses: " + losses;
                console.log(losses);
                // If the user runs out of turns 
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