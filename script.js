let buttons = document.querySelectorAll(".element-button");
let leftText = document.querySelector(".left-text");
let leftScoreText = document.querySelector(".left-score-text");
let rightText = document.querySelector(".right-text");
let rightScoreText = document.querySelector(".right-score-text");
let resultText = document.querySelector(".result");
let restartButton = document.querySelector("#restart");


buttons.forEach((button) => {
  if (button.id !== "restart") {
    button.addEventListener("click", function () {
      play(button.textContent);
    });
  }
});

restartButton.addEventListener("click", restart);

let youScore = 0;
let enemyScore = 0;

function restart(){
  enemyScore = 0;
  youScore = 0;
  leftScoreText.textContent = "";
  rightScoreText.textContent = "";
  resultText.textContent = "";
  leftText.textContent = "";
  rightText.textContent = "";

  buttons.forEach(button => button.style.display = "inline-block");
  restartButton.style.display = "none";
}

function play(button) {
  switch (button) {
    case "Rock":
      leftText.textContent = "ROCK";
      break;
    case "Paper":
      leftText.textContent = "PAPER";
      break;
    case "Scissors":
      leftText.textContent = "SCISSORS";
      break;
  }

  let random = Math.random();
  if (random < 0.33) {
    rightText.textContent = "ROCK";
  } else if (random < 0.66) {
    rightText.textContent = "PAPER";
  } else {
    rightText.textContent = "SCISSORS";
  }

  switch (leftText.textContent) {
    case "ROCK":
      switch (rightText.textContent) {
        case "ROCK":
          resultText.textContent = "TIE, TRY AGAIN!";
          break;
        case "PAPER":
          resultText.textContent = "YOU LOSE :( TRY AGAIN!";
          break;
        case "SCISSORS":
          resultText.textContent = "YOU WIN!";
          break;
      }
      break;
    case "PAPER":
      switch (rightText.textContent) {
        case "ROCK":
          resultText.textContent = "YOU WIN!";
          break;
        case "PAPER":
          resultText.textContent = "TIE, TRY AGAIN!";
          break;
        case "SCISSORS":
          resultText.textContent = "YOU LOSE :( TRY AGAIN!";
          break;
      }
      break;
    case "SCISSORS":
      switch (rightText.textContent) {
        case "ROCK":
          resultText.textContent = "YOU LOSE :( TRY AGAIN!";
          break;
        case "PAPER":
          resultText.textContent = "YOU WIN!";
          break;
        case "SCISSORS":
          resultText.textContent = "TIE, TRY AGAIN!";
          break;
      }
      break;
  }
  resultText.style.color = "black";
  if (resultText.textContent === "YOU WIN!") {
    youScore += 1;
    resultText.style.color = "green";
  } else if (resultText.textContent === "YOU LOSE :( TRY AGAIN!") {
    enemyScore += 1;
    resultText.style.color = "red";
  }

  leftScoreText.textContent = youScore;
  rightScoreText.textContent = enemyScore;

  if (youScore >= 5 || enemyScore >= 5) {
    buttons.forEach(button => button.style.display = "none");
    restartButton.style.display = "inline-block";
    if (youScore > enemyScore){
      resultText.textContent = "You won the game!";
      resultText.style.color = "green";
      resultText.style.fontSize = "48px";
    } else {
      resultText.textContent = "You LOST the game!";
      resultText.style.color = "red";
      resultText.style.fontSize = "48px";
    }
    
  }

}
