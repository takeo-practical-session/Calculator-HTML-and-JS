// Get references to the elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const buttons = document.querySelectorAll("button[data-operation]");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Function to perform the calculation
function calculate(operation) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Input validation
  if (isNaN(num1) || isNaN(num2)) {
    errorDiv.textContent = "Please enter valid numbers";
    resultDiv.textContent = "";
    return;
  }

  errorDiv.textContent = "";
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "modulo":
      result = num1 % num2;
      break;
    default:
      errorDiv.textContent = "Invalid operation";
      return;
  }
  resultDiv.textContent = `Result: ${result}`;
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.getAttribute("data-operation");
    calculate(operation);
  });
});
