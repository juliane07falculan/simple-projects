const ngInputNumber = document.getElementById("ng-input-number");
const ngGuessButton = document.getElementById("ng-guess-button");
const ngInputHint = document.getElementById("ng-text-hint");
const ngInputAttempt = document.getElementById("ng-text-attempt");
let attempt = 0;
let score = 0;

function play(){
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);

    ngGuessButton.addEventListener("click", checkGuess);

    function checkGuess() {
        const userGuess = Number(ngInputNumber.value);
        attempt ++;
    
        if (isNaN(userGuess)){
            ngInputHint.textContent = "Enter number only";
        }
        else if (userGuess < 1 || userGuess > 100) {
            ngInputHint.textContent = "Invalid Input";
        }
    
        else if(userGuess < randomNumber) {
            ngInputHint.textContent = "Guess too low!.";
        }
    
        else if(userGuess > randomNumber) {
            ngInputHint.textContent = "Guess too high!.";
        }
        else {
            ngInputHint.textContent = `Congratulations, You guessed it right!`;
            ngInputAttempt.textContent = `Attempts: ${attempt}`;
        }
    }
}

play();
 