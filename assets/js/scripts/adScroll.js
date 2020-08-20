export default function adScroll() {
	let y = window.scrollY;

	const ad = document.getElementById("ad");
	const sectionAd = document.getElementById("sectionAd");

	const sectionAdOffset = getElementOffset(sectionAd);
	let sectionFromTopScreen = sectionAdOffset - y;

	if (sectionFromTopScreen <= 0) {
		ad.classList.add("is-fixed");
	} else {
		ad.classList.remove("is-fixed");
	}
}

function getElementOffset(el) {
	const rect = el.getBoundingClientRect();
	return rect.top + window.pageYOffset;
}
