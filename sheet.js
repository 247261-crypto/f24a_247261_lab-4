// Task 1: the rows live in one array, starting empty. Each row is one object.
var rows = [];

// Task 3: Add builds one object and puts it on the end of the array.
document.getElementById("add").onclick = function () {
  var itemText = document.getElementById("item").value;
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;

  var row = {};
  // Task 4: when the item box is empty, the object has no item.
  if (itemText !== "") {
    row.item = itemText;
  }
  row.quantity = quantity;
  row.price = price;
  row.line = quantity * price;          // NaN when the price is not a number
  row.note = String(price) + quantity;  // price as text, quantity on the end

  rows.push(row);
  draw();
  report(row);

  document.getElementById("item").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
};

// The table is drawn again from the array.
function draw() {
  var body = document.getElementById("rows");
  body.innerHTML = "";
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    var tr = document.createElement("tr");
    var cells = [r.item, r.quantity, r.price, r.line, r.note];
    for (var j = 0; j < cells.length; j++) {
      var td = document.createElement("td");
      td.textContent = "" + cells[j];   // r.item missing -> "undefined"
      tr.appendChild(td);
    }
    body.appendChild(tr);
  }
}

// Task 5: total of every Line that is a number; NaN is left out.
function report(last) {
  var total = 0;
  for (var i = 0; i < rows.length; i++) {
    if (typeof rows[i].line === "number" && !isNaN(rows[i].line)) {
      total = total + rows[i].line;
    }
  }
  document.getElementById("total").textContent = "Total: " + total;
  document.getElementById("totalKind").textContent = "Kind of total: " + typeof total;
  document.getElementById("noteKind").textContent = "Kind of Note: " + typeof last.note;
  document.getElementById("match").textContent =
    "Does the price text match the price as a number? " + (last.price === Number(last.price));
  document.getElementById("sameKind").textContent =
    "Are those two the same kind? " + (typeof last.price === typeof Number(last.price));
  document.getElementById("lineKind").textContent =
    isNaN(last.line) ? "Kind of that Line: " + typeof last.line : "";
}