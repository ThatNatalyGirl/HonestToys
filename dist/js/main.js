"use strict";

console.log("Hello");

var dropdown = document.querySelector("header nav ul");
var burger = document.querySelector(".hamburger");
var x = document.querySelector("nav ul div");

dropdown.style.display = "none";

burger.addEventListener("click", function () {
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
	}
});

x.addEventListener("click", function () {
	dropdown.style.display = "none";
});
//# sourceMappingURL=main.js.map
