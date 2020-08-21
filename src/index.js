import styles from "../assets/stylesheets/styles.scss";
import Header from "../assets/js/components/Header";
import SectionAd from "../assets/js/components/SectionAd";
import Kiloren from "../assets/js/components/Kiloren";
import SectionLast from "../assets/js/components/SectionLast";
import createElement from "../assets/js/helper/createElement";
import debounce from "../assets/js/helper/debounce";
import Troopers from "../assets/js/components/Troopers";
import Footer from "../assets/js/components/Footer";

import { Parallax } from "../assets/js/scripts/parallax";
import adScroll from "../assets/js/scripts/adScroll";

createElement();

let parallaxActive = false;
function getParallaxActive() {
	if (window.innerWidth > 1025) {
		parallaxActive = true;
	} else {
		parallaxActive = false;
	}
	return parallaxActive;
}

window.addEventListener("resize", function () {
	getParallaxActive();
});

window.addEventListener("load", function () {
	getParallaxActive();
	const head = document.querySelector(".c-header");
	const firstArticle = document.getElementById("article");
	const parallaxHead = new Parallax(head);
	const parallaxArticle = new Parallax(firstArticle);
	window.addEventListener("scroll", function () {
		if (parallaxActive) {
			debounce(parallaxHead.activeParallax());
			debounce(parallaxArticle.activeParallax());
		} else {
			parallaxHead.resetParallax();
			parallaxArticle.resetParallax();
		}
		debounce(adScroll());
	});
});

const app = <div className="app"></div>;
app.appendChild(Header);
app.appendChild(SectionAd);
app.appendChild(Kiloren);
app.appendChild(SectionLast);
app.appendChild(Troopers);
app.appendChild(Footer);

window.document.getElementById("app").replaceWith(app);
