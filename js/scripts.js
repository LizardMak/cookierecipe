//User interface logic
window.onload = function() {
 let lightMode = document.querySelector("#light");
 let darkMode = document.querySelector("#dark");
 let body = document.body;
 darkMode.onclick = function() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
 };
 lightMode.onclick = function() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
 }
};