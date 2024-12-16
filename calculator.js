// Get references to the elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const buttons = document.querySelectorAll("button[data-operation]");
const resultDiv = document.getElementById("result");

const digitButtons = document.querySelectorAll("button[data-digit]");
const darkModeButton = document.getElementById("dark-mode");
darkModeButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  let element = document.body;
  let element2 = document.getElementById("calculator");
  let element3 = document.getElementsByClassName("digitOp");
  element.classList.toggle("themes");
  element2.classList.toggle("calculator-dark");
  element3.classList.toggle("digitOp-dark");
}

let currentInput = num1Input;

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.getAttribute("data-digit");
    if (digit === "." && currentInput.value.includes(".")) {
      return;
    }
    currentInput.value += digit;
  });
});

num1Input.addEventListener("focus", () => {
  currentInput = num1Input;
});
num2Input.addEventListener("focus", () => {
  currentInput = num2Input;
});

let results;

function calculate(operation) {
  let num1 = parseFloat(num1Input.value);
  let num2 = parseFloat(num2Input.value);
  switch (operation) {
    case "add":
      results = num1 + num2;
      break;
    case "subtract":
      results = num1 - num2;
      break;
    case "multiply":
      results = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        results = num1 / num2;
      } else {
        results = "Cannot divide by zero";
      }
      break;
    case "modulo":
      if (num2 !== 0) {
        results = num1 % num2;
      } else {
        results = "Cannot divide by zero";
      }
      break;
    default:
      results = "Invalid operation";
  }
  return results;
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.getAttribute("data-operation");
    calculate(operation);
    if (
      num2Input.value == 0 &&
      (operation == "divide" || operation == "modulo")
    ) {
      resultDiv.innerText = "Cannot divide by zero";
    } else {
      resultDiv.innerText = results;
    }
  });
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "+":
      calculate("add");
      break;
    case "-":
      calculate("subtract");
      break;
    case "*":
      calculate("multiply");
      break;
    case "/":
      calculate("divide");
      break;
    case "%":
      calculate("modulo");
      break;
  }
  resultDiv.innerText = results;
});
