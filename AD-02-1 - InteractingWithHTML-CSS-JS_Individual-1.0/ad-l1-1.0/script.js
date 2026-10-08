document.querySelector("h1").textContent = "GoodBye";

document.querySelectorAll("h1")[2].style.color = "orange";

document.getElementById("clickable").addEventListener("click", function() {
  this.style.color = "brown";
});
