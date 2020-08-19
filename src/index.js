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

window.addEventListener("load", function () {
	const head = document.querySelector(".c-header");
	const firstArticle = document.getElementById("article");
	const parallaxHead = new Parallax(head);
	const parallaxArticle = new Parallax(firstArticle);
	window.addEventListener("scroll", function () {
		debounce(parallaxHead.activeParallax());
		debounce(parallaxArticle.activeParallax());
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

// Render our dom elements
window.document.getElementById("app").replaceWith(app);
