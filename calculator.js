let currentInput = "";
let history = [];

function press(key) {
  currentInput += key;
  document.getElementById("display").value = currentInput;
}

function calculate() {
  const result = eval(currentInput);
  history.push(`${currentInput} = ${result}`);
  document.getElementById("display").value = result;
  currentInput = result.toString();
  updateHistory();
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function updateHistory() {
  document.getElementById("history").innerHTML = history
    .slice(-5)
    .map((h) => `<div>${h}</div>`)
    .join("");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
