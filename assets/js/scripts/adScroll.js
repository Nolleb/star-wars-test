export default function adScroll() {
	let y = window.scrollY;

	const ad = document.getElementById("ad");
	const sectionAd = document.getElementById("sectionAd");

	const sectionAdOffset = getElementOffset(sectionAd);
	let sectionFromTopScreen = sectionAdOffset - y;

	if (sectionFromTopScreen <= 0) {
		removeClass(ad);
		ad.classList.add("is-fixed");
	} else {
		removeClass(ad);
		ad.classList.add("is-relative");
	}
}

function getElementOffset(el) {
	const rect = el.getBoundingClientRect();
	return rect.top + window.pageYOffset;
}

function removeClass(selector) {
	const classesToRemove = ["is-relative", "is-fixed"];
	selector.classList.remove(...classesToRemove);
}
