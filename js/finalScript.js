//variables
const Genus = document.querySelector("#Genus");
const heading = document.querySelector("#heading");
const Species = document.querySelector("#Species");
const fs = document.querySelector("#favsucculent");

const checkbox = document.querySelectorAll("#Form");

//changeing the header text
Genus.oninput = function () {
  heading.innerText = "I love " + Genus.value;
};

//populate our fav team field
Species.oninput = function () {
  fs.value = Genus.value + " " + Species.value;
};

//alert when a checkbox is clicked
checkbox[0].onclick = function () {
  if (heading.innerHTML === "I love Echeveria") {
    alert("Flowering was clicked but you also love Echeveria");
  } else {
    alert("Flowering was clicked!");
  }
};
checkbox[1].onclick = function () {
  alert("Hanging was clicked!");
};
checkbox[2].onclick = function () {
  alert("Rosettes was clicked!");
};
checkbox[3].onclick = function () {
  alert("Fuzzy was clicked!");
};
