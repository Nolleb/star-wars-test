import SectionAd from "../components/SectionAd";

export default function adScroll() {
	let y = window.scrollY;

	const ad = document.getElementById("ad");
	const sectionAd = document.getElementById("sectionAd");

	let sectionAdOffset = getElementOffset(sectionAd);
	const sectionAdHeight = SectionAd.offsetHeight;
	let sectionFromTopScreen = sectionAdOffset + 50 - y;
	let sectionFromBottomScreen = sectionAdOffset + sectionAdHeight + 100 - y;

	if (sectionFromTopScreen <= 0) {
		ad.classList.remove("is-relative");
		ad.classList.remove("is-absolute");
		ad.classList.add("is-fixed");
	} else {
		ad.classList.remove("is-fixed");
		ad.classList.remove("is-absolute");
		ad.classList.add("is-relative");
	}
	if (sectionFromBottomScreen <= y) {
		ad.classList.remove("is-relative");
		ad.classList.remove("is-fixed");
		ad.classList.add("is-absolute");
	}
}

function getElementOffset(el) {
	const rect = el.getBoundingClientRect();
	return rect.top + window.pageYOffset;
}
