import image from "../../images/logo.png";
import createElement from "../helper/createElement";
import Menu from "./Menu";

createElement();

const Header = (
	<header className="c-header">
		<div className="c-header__img-container">
			<img className="c-header__img" alt="star wars logo" src={image} />
		</div>
	</header>
);

Header.prepend(Menu);

export default Header;
