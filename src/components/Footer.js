import createElement from "../helper/createElement";

createElement();

const title = "TM Lucasfilm Ltd. All Rights Reserved.";
const column1 = ["Terms of use", "Legal notices", "Privacy policy"];
const column2 = [
	"Your California Privacy Rights",
	"Star Wars at Disney Store",
	"Privacy policy",
];

const Footer = (
	<footer className="c-footer">
		<h2 className="has-text-center c-footer__title">{title}</h2>
		<div className="c-footer__inner">
			<div className="c-footer__column">
				<ul>
					{column1.map((label) => (
						<li>
							<a href="#">{label}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="c-footer__column has-text-center">
				<ul>
					{column2.map((label) => (
						<li>
							<a href="#">{label}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="c-footer__column">
				<h2 className="is-uppercase">Follow star wars</h2>
				<ul>
					<li>
						<a href="#">Facebook</a>
					</li>
					<li>
						<a href="#">Twitter</a>
					</li>
					<li>
						<a href="#">Instagram</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
);

export default Footer;
