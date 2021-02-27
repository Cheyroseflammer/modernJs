// create our vars
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// ui elements
const gameEL = document.querySelector("#game"),
  minNumEL = document.querySelector(".min-num"),
  maxNumEL = document.querySelector(".max-num"),
  guessBtnEL = document.querySelector("#guess-btn"),
  guessInputEL = document.querySelector("#guess-input"),
  messageEL = document.querySelector(".message");

// Assing ui min and mix
minNumEL.textContent = min;
maxNumEL.textContent = max;

// Play again event listener

gameEL.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Create event listener
guessBtnEL.addEventListener("click", function () {
  let guess = parseInt(guessInputEL.value);
  // validate our input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Error..please enter number between ${min} and ${max}`, "red");
  }
  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(
      true,
      `CONGRATS you guessed ${guess} and ${winningNum} was the winning number!`
    );
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `SORRY, game over..you didnt have any quesses left. The correct number was ${winningNum}.`
      );
    } else {
      // Games continues - answer wrong
      // Change boarder color
      guessInputEL.style.borderColor = "red";
      // Clear input
      guessInputEL.value = "";
      // Tell user wrong number
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

// Game over function
function gameOver(won, msg, guess) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // disable input
  guessInputEL.disabled = true;
  // change boarder color
  guessInputEL.style.borderColor = color;
  // set text color
  messageEL.style.color = color;
  // let user know they won
  setMessage(msg);

  // Play again?
  guessBtnEL.value = "Play again";
  guessBtnEL.className += "play-again";
}

// Get winning num

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message function
function setMessage(msg, color) {
  messageEL.style.color = color;
  messageEL.textContent = msg;
}
