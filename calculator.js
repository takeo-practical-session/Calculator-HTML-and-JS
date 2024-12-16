// Get references to the elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const buttons = document.querySelectorAll("button[data-operation]");
const resultDiv = document.getElementById("result");

// rest of your code goes here.

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const operation = button.getAttribute("data-operation");
    calculate(operation);
  });
});