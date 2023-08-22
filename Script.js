// function computeLoan() {
//   var amount = document.getElementById("amount").value;
//   var interest_rate = document.getElementById("interest_rate").value;
//   var months = document.getElementById("months").value;
//   var interest = (amount * (interest_rate * 0.01)) / months;
//   var payment = (amount / months + interest).toFixed(2);
//   payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   document.getElementById("payment").innerHTML =
//     "Monthly Payment = $" + payment;
// }

/*New code*/

function computeLoan() {
  var amount = parseFloat(document.getElementById("amount").value);
  var interest_rate = parseFloat(
    document.getElementById("interest_rate").value
  );
  var months = parseInt(document.getElementById("months").value);

  if (isNaN(amount) || isNaN(interest_rate) || isNaN(months)) {
    document.getElementById("payment").innerHTML = "Please enter valid values.";
    return;
  }

  if (
    amount <= 0 ||
    amount > 5000000 ||
    interest_rate < 0 ||
    interest_rate > 100 ||
    months <= 0 ||
    months > 300
  ) {
    document.getElementById("payment").innerHTML =
      "Please enter values within the allowed range.";
    return;
  }

  var interest = (amount * (interest_rate * 0.01)) / months;
  var payment = (amount / months + interest).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("payment").innerHTML =
    "Monthly Payment = $" + payment;
}
