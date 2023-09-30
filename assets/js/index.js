// const navicon = document.getElementById("navicon");
// const ul = document.getElementById("checked");
// navicon.addEventListener("click", function () {
//   ul.classList.toggle("l_0");
// });

function shownav() {
  document.getElementById("navBar").classList.add("l_0");
  document.body.classList.add("overflow-hidden");
}
function closenav() {
  document.getElementById("navBar").classList.remove("l_0");
  document.body.classList.remove("overflow-hidden");
}
