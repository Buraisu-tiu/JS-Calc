let displayText = document.getElementById("display");
console.log(displayText);

let num1;

function one() {
  displayText.textContent += "1";
}

function two() {
  displayText.textContent += "2";
}

function three() {
  displayText.textContent += "3";
}

function four() {
  displayText.textContent += "4";
}

function five() {
  displayText.textContent += "5";
}

function six() {
  displayText.textContent += "6";
}

function seven() {
  displayText.textContent += "7";
}

function eight() {
  displayText.textContent += "8";
}

function nine() {
  displayText.textContent += "9";
}

function zero() {
  displayText.textContent += "0";
}

function plus() {
  displayText.textContent += "+";
}

function minus() {
  displayText.textContent += "-";
}

function times() {
  displayText.textContent += "x";
}

function divide() {
  displayText.textContent += "/";
}

function erase() {
  displayText.textContent = "";
  num1 = 0;
}

function calc() {
  let numbers = displayText.textContent.split(/[+-\/x]/);
  num1 = numbers[0];
  num2 = numbers[1];
  let number1 = parseInt(num1);
  let number2 = parseInt(num2);
  let answer = 0;
  if(displayText.textContent.includes('+')) {
    answer = number1 + number2;
  }

  if(displayText.textContent.includes('-')) {
    answer = number1 - number2;
  }

  if(displayText.textContent.includes('x')) {
    answer = number1 * number2;
  }

  if(displayText.textContent.includes('/')) {
    answer = number1 / number2;
  }
  displayText.textContent = answer;
  console.log(answer)
}
