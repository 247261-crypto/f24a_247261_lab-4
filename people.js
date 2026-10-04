// Task 11: the list starts with one person who has a name and no answer.
var people = [{ name: "Ali" }];

document.getElementById("here").onclick = function () { addPerson(true); };
document.getElementById("out").onclick = function () { addPerson(false); };

function addPerson(isIn) {
  var name = document.getElementById("name").value;
  people.push({ name: name, in: isIn });   // name and answer stay together
  document.getElementById("name").value = "";
  draw();
}

function draw() {
  var body = document.getElementById("list");
  body.innerHTML = "";
  var count = 0;
  for (var i = 0; i < people.length; i++) {
    var p = people[i];
    var tr = document.createElement("tr");
    var a = document.createElement("td");
    var b = document.createElement("td");
    a.textContent = p.name;
    b.textContent = "" + p.in;             // true, false, or undefined
    tr.appendChild(a);
    tr.appendChild(b);
    body.appendChild(tr);
    if (p.in === true) { count++; }        // undefined is not counted
  }
  document.getElementById("count").textContent = "In the shop: " + count;
}

draw();