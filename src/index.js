import styles from "../assets/stylesheets/styles.scss";
import Header from "./components/Header";
import SectionAd from "./components/SectionAd";
import Kiloren from "./components/Kiloren";
import SectionLast from "./components/SectionLast";
import createElement from "./helper/createElement";
import Troopers from "./components/Troopers";
import Footer from "./components/Footer";

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
