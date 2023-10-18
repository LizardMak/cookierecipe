//User interface logic
window.onload = function() {
 let lightMode = document.querySelector("#light");
 let darkMode = document.querySelector("#dark");
 let body = document.body;
 let head = document.head;
 darkMode.onclick = function() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
 };
};