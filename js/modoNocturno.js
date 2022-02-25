// const htmlElement = document.querySelector("html");
// const togglebutton = document.querySelector("#toggle");

// togglebutton.addEventListener("click", () => {
//   htmlElement.classList.toggle("dark");

// });

var cuerpoweb = document.body;
var modo = document.querySelector("#toggle");
var modo_movil = document.querySelector("#toggle-mobile");
console.log(modo);
console.log(modo, modo_movil);

modo.onclick = function () {
  // console.log("toggle");
  cuerpoweb.classList.toggle("dark");
  modo.innerHTML = cuerpoweb.classList.contains();
};
modo_movil.onclick = function () {
  // console.log("toggle");
  cuerpoweb.classList.toggle("dark");
  modo_movil.innerHTML = cuerpoweb.classList.contains();
};
