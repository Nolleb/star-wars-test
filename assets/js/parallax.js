export default function parallax() {
	let logo = document.querySelector(".c-header__img");
	let text = document.getElementById("article");
	let stars = document.querySelector(".c-header__inner");
	console.log("yooooooooooooo");
	let value = window.scrollY;
	logo.style.position = "relative";
	text.style.position = "relative";
	stars.style.position = "relative";
	logo.style.top = value * -0.5 + "px";
	text.style.top = value * -0.7 + "px";
	stars.style.top = value * 0.5 + "px";
}
