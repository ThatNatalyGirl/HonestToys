console.log(`Hello`)


var dropdown = document.querySelector("header nav ul");
var burger = document.querySelector(".hamburger");

dropdown.style.display ="none";
var open = function () {
	if( dropdown.style.display == "none" ) {
		dropdown.style.display = "block";
		burger.style.transform = "rotate(90deg)";
	} else {
		dropdown.style.display = "none";
		burger.style.transform = "none";
	}
};

burger.addEventListener("click", open);