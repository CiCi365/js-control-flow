// 1. Generate a random secret number
const secretNum = Math.ceil(Math.random()*100);

// 2. Declare a variable to hold the player's guess
let playerGuess; 

// 3. Loop while the player's guess is not correct
while(playerGuess !== secretNum) {

  // 3.1. Prompt for the player's guess
  playerGuess = prompt("Guess a number between 1 through 100!");

  // 3.2. Convert the player's input into a number
  playerGuess = parseInt(playerGuess);
  // 3.3. If the guess is lower or higher than the secret number, print a message that informs the player as such
  if(playerGuess < secretNum) {
    alert("Too low!");
  }
  else if(playerGuess > secretNum){
    alert("Too high!");
  }
}

// 4. Print a message congratulating the player
alert("Congratulations, You got it right. The secret number was " + secretNum );