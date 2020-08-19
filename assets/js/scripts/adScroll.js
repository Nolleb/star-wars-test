import SectionAd from "../components/SectionAd";

export default function adScroll() {
	let y = window.scrollY;

	const ad = document.getElementById("ad");
	const sectionAd = document.getElementById("sectionAd");

	const sectionAdOffset = getElementOffset(sectionAd);
	const sectionAdHeight = SectionAd.offsetHeight;
	let sectionFromTopScreen = sectionAdOffset - y;
	let sectionFromBottomScreen = sectionAdOffset + sectionAdHeight - y;

	if (sectionFromTopScreen <= 0) {
		removeClass(ad);
		ad.classList.add("is-fixed");
	} else {
		removeClass(ad);
		ad.classList.add("is-relative");
	}
	if (sectionFromBottomScreen < y) {
		removeClass(ad);
		ad.classList.add("is-absolute");
	}
}

function getElementOffset(el) {
	const rect = el.getBoundingClientRect();
	return rect.top + window.pageYOffset;
}

function removeClass(selector) {
	const classesToRemove = ["is-relative", "is-absolute", "is-fixed"];
	selector.classList.remove(...classesToRemove);
}
