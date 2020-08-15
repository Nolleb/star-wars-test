import image from "../../assets/images/logo.png";

function createElement(tagName, attrs = {}, ...children) {
	const elem = Object.assign(document.createElement(tagName), attrs);
	for (const child of children) {
		if (Array.isArray(child)) elem.append(...child);
		else elem.append(child);
	}
	return elem;
}

const Header = <img alt="star wars logo" src={image} />;

export default Header;
