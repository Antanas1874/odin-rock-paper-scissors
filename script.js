let buttons = document.querySelectorAll(".element-button");
let leftText = document.querySelector(".left-text");
let rightText = document.querySelector(".right-text");
let resultText = document.querySelector(".result");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    play(button.textContent);
  });
});

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
            resultText.textContent = "TIE, TRY AGAIN!"
          break;
        case "PAPER":
            resultText.textContent = "YOU LOSE :( TRY AGAIN!"
          break;
        case "SCISSORS":
            resultText.textContent = "YOU WIN!"
          break;
      }
      break;
    case "PAPER":
      switch (rightText.textContent) {
        case "ROCK":
            resultText.textContent = "YOU WIN!"
          break;
        case "PAPER":
            resultText.textContent = "TIE, TRY AGAIN!"
          break;
        case "SCISSORS":
            resultText.textContent = "YOU LOSE :( TRY AGAIN!"
          break;
      }
      break;
    case "SCISSORS":
      switch (rightText.textContent) {
        case "ROCK":
            resultText.textContent = "YOU LOSE :( TRY AGAIN!"
          break;
        case "PAPER":
            resultText.textContent = "YOU WIN!"
          break;
        case "SCISSORS":
            resultText.textContent = "TIE, TRY AGAIN!"
          break;
      }
      break;
  }
  resultText.style.color = "black";
  if (resultText.textContent==="YOU WIN!")
  {
    resultText.style.color = "green";
  } else if (resultText.textContent==="YOU LOSE :( TRY AGAIN!"){
    resultText.style.color = "red";
  }
}
