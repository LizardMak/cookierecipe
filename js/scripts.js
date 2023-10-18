//User interface logic
window.onload = function() {
 let lightMode = document.querySelector("#light");
 let darkMode = document.querySelector("#dark");
 let largeText = document.querySelector("#textLarge")
 let body = document.body;
 darkMode.onclick = function() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
 };
 lightMode.onclick = function() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
 }
 largeText.onclick = function () {
  body.style.fontSize = "x-large";
 };
};