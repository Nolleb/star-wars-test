import styles from "../assets/stylesheets/styles.scss";
import Header from "../assets/js/components/Header";
import SectionAd from "../assets/js/components/SectionAd";
import Kiloren from "../assets/js/components/Kiloren";
import SectionLast from "../assets/js/components/SectionLast";
import createElement from "../assets/js/helper/createElement";
import Troopers from "../assets/js/components/Troopers";
import Footer from "../assets/js/components/Footer";

createElement();

const app = <div className="app"></div>;
app.appendChild(Header);
app.appendChild(SectionAd);
app.appendChild(Kiloren);
app.appendChild(SectionLast);
app.appendChild(Troopers);
app.appendChild(Footer);

// Render our dom elements
window.document.getElementById("app").replaceWith(app);
