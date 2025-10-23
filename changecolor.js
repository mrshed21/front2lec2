const numberInput = document.getElementById("number-input");
const checkNumberBtn = document.getElementById("check-number-btn");
const numberResult = document.getElementById("number-result");

checkNumberBtn.addEventListener("click", function () {
  const number = parseInt(numberInput.value);

  if (isNaN(number)) {
    numberResult.innerHTML =
      '<p class="error">Vänligen ange en giltig siffra.</p>';
    return;
  }

  if (number < 0 || number > 10) {
    numberResult.innerHTML = `<p class="error">Fel: Siffran ${number} är utanför intervallet 0-10. Vänligen ange ett tal mellan 0 och 10.</p>`;
    return;
  }

  let colorClass = "";
  if (number < 4) {
    colorClass = "red";
  } else if (number <= 7) {
    colorClass = "yellow";
  } else {
    colorClass = "green";
  }

  numberResult.innerHTML = `<div class="number-display ${colorClass}">${number}</div>`;
});

