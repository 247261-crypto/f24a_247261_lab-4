document.getElementById("take").onclick = function () {
  var bill = Number(document.getElementById("bill").value);
  var paidText = document.getElementById("paid").value;

  // Task 8: when the paid box is empty, the till stores null.
  var paid = paidText === "" ? null : Number(paidText);
  document.getElementById("paidKind").textContent =
    paid === null ? "Kind of paid: " + typeof paid : "";

  document.getElementById("change").textContent = "";
  document.getElementById("owed").textContent = "";
  document.getElementById("half").textContent = "";

  // Task 7: the call sits above the function.
  var change = getChange(paid, bill);

  if (bill > paid) {
    document.getElementById("owed").textContent = "Still owed: " + (bill - paid);
  } else {
    document.getElementById("change").textContent = "Change: " + change;
    if (paid > bill) {
      document.getElementById("half").textContent = "Half of the change: " + change / 2;
    }
  }
};

function getChange(paid, bill) {
  return paid - bill;
}Z