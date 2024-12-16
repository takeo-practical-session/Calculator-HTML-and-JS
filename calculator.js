// script.js

// Perform the calculation based on the selected operation
function performOperation(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");
  const historyList = document.getElementById("historyList");

  resultDiv.innerHTML = "";

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.innerHTML = "<p class='error'>Please enter valid numbers!</p>";
    return;
  }

  let result;
  let operationSymbol;

  switch (operation) {
    case "+":
      result = num1 + num2;
      operationSymbol = "+";
      break;
    case "-":
      result = num1 - num2;
      operationSymbol = "-";
      break;
    case "*":
      result = num1 * num2;
      operationSymbol = "×";
      break;
    case "/":
      result = num2 === 0 ? "Cannot divide by zero!" : num1 / num2;
      operationSymbol = "÷";
      break;
    case "%":
      result = num2 === 0 ? "Cannot calculate modulo by zero!" : num1 % num2;
      operationSymbol = "%";
      break;
    default:
      result = "Invalid operation!";
  }

  // Display the result
  resultDiv.innerHTML = `<p>Result: <strong>${result}</strong></p>`;

  // Add to history
  if (!isNaN(result)) {
    const historyItem = document.createElement("li");
    historyItem.textContent = `${num1} ${operationSymbol} ${num2} = ${result}`;
    historyList.appendChild(historyItem);
  }
}

// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
