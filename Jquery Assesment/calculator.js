let numberButton = document.querySelectorAll(".num");
let symbolButton = document.querySelectorAll(".symbol");
let numberBar = document.getElementById("number_bar");
let answerBtn = document.getElementById("ansBtn");
let answer = document.getElementById("ans");

let number = "";
let number2 = "";
let symbol = "";
let oldNumber = 0;
numberButton.forEach((element) => {
  element.addEventListener("click", function () {
    number += this.innerText;
    numberBar.innerText += this.innerText;
  });
});

symbolButton.forEach((element) => {
  element.addEventListener("click", function () {
    numberBar.innerText += this.innerText;
    number2 = number;
    number = "";
    symbol = this.innerText;
  });
});

answerBtn.addEventListener("click", function () {
  switch (symbol) {
    case "+":
      answer.innerText = Number(number) + Number(number2) + oldNumber;
      break;
    case "-":
      answer.innerText = Number(number) - Number(number2) + oldNumber;
      break;
    case "*":
      answer.innerText = Number(number) * Number(number2) + oldNumber;
      break;
    case "/":
      answer.innerText = Number(number) / Number(number2) + oldNumber;
      break;
    default:
      break;
  }
  oldNumber = Number(answer.innerText);
  number = "";
  number2 = "";
  symbol = "";
  numberBar.innerText = "";
});
