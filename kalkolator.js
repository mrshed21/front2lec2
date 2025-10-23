const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addBtn = document.getElementById("add-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const subtractBtn = document.getElementById("subtract-btn");
const calculatorResult = document.getElementById("calculator-result");

addBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    calculatorResult.innerHTML =
      '<p class="error">Vänligen fyll i båda talen med giltiga nummer.</p>';
    return;
  }

  const result = num1 + num2;
  calculatorResult.innerHTML = `<p class="success">Resultat: ${num1} + ${num2} = ${result}</p>`;
});

multiplyBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    calculatorResult.innerHTML =
      '<p class="error">Vänligen fyll i båda talen med giltiga nummer.</p>';
    return;
  }

  const result = num1 * num2;
  calculatorResult.innerHTML = `<p class="success">Resultat: ${num1} × ${num2} = ${result}</p>`;
});

subtractBtn.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    calculatorResult.innerHTML =
      '<p class="error">Vänligen fyll i båda talen med giltiga nummer.</p>';
    return;
  }

  let result;
  if (num2 < 0) {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }

  if (result < 0) {
    calculatorResult.innerHTML = `<p class="error">Fel: Resultatet blev negativt (${result}). För att subtrahera dessa tal, se till att det första talet är större än eller lika med det andra.</p>`;
  } else {
    calculatorResult.innerHTML = `<p class="success">Resultat: ${num1} - ${num2} = ${result}</p>`;
  }
});
