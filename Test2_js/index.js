function calculateTotal() {
  let userSumma = parseFloat(document.getElementById("userSumma").value);
  let tip = parseFloat(document.getElementById("tip").value);
  let tax = 100;

  if (isNaN(userSumma) || isNaN(tip) || userSumma < 0 || tip < 0) {
    alert("Пожалуйста, введите корректные значения.");
    return;
  }

  let a = (userSumma / tax) * tip;
  let result = userSumma + a;

  document.getElementById("result").innerHTML = `
        Итоговая сумма: ${result.toFixed(2)} сомов
    `;
}
