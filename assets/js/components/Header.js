import imgLogo from "../../images/logo.png";
import imgHamburger from "../../images/menu.png";
import imgClose from "../../images/close.png";
import createElement from "../helper/createElement";
import Menu from "./Menu";

createElement();

const Header = (
	<header className="c-header">
		<div className="c-header__inner block-image">
			<div className="c-header__img-container">
				<img className="c-header__img" alt="star wars logo" src={imgLogo} />
			</div>
		</div>
		<input type="checkbox" id="toggle" className="is-hidden" />
		<label htmlFor="toggle" className="icon-menu">
			<img className="icon-open" alt="open menu" src={imgHamburger} />
			<img className="icon-close" alt="close menu" src={imgClose} />
		</label>
	</header>
);

Header.append(Menu);

export default Header;
