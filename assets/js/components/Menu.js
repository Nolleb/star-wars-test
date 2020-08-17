import createElement from "../helper/createElement";

createElement();

const menuLabels = [
	"le côté lumineux",
	"le côté obscur",
	"l'empire",
	"les droids",
	"les ewoks",
	"jabba le hutt",
];

const Menu = (
	<div className="c-menu">
		<ul className="o-list">
			{menuLabels.map((label) => (
				<li className="c-menu__item">
					<a className="c-menu__link" href="#">
						{label}
					</a>
				</li>
			))}
		</ul>
	</div>
);

export default Menu;
