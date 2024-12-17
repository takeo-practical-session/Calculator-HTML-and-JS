// Get references to the elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const buttons = document.querySelectorAll("button[data-operation]");
const resultDiv = document.getElementById("result");

// Function to perform the calculations
function calculate(operation) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter valid numbers in both fields.";
    return;
  }

  let result;

  // Switch based on the operation
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
      if (num2 === 0) {
        resultDiv.textContent = "Cannot divide by zero!";
        return;
      }
      result = num1 / num2;
      break;
    case "modulo":
      result = num1 % num2;
      break;
    default:
      resultDiv.textContent = "Invalid operation!";
      return;
  }

  // Display the result
  resultDiv.textContent = `Result: ${result}`;
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.getAttribute("data-operation");
    calculate(operation);
  });
});
