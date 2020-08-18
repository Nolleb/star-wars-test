export function Parallax(container) {
	this.img = container.querySelector("img");
	this.text = container.querySelectorAll(".c-article");
	this.block = container.querySelector(".block-image");
}

Parallax.prototype.activeParallax = function () {
	let scrollVal = window.scrollY;
	if (this.img != null) {
		this.img.style.position = "relative";
		this.img.style.top = scrollVal * -0.5 + "px";
	}
	if (this.text != null) {
		this.text.forEach((element) => {
			element.style.position = "relative";
			element.style.top = scrollVal * -0.7 + "px";
		});
	}
	if (this.block != null) {
		this.block.style.position = "relative";
		this.block.style.top = scrollVal * 0.5 + "px";
	}
};
