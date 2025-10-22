function calculateFactorial() {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  if (input === "" || input < 0) {
    output.innerHTML = "⚠️ Please enter a positive number.";
    return;
  }

  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  output.innerHTML = `${input}! = ${result}`;
}
