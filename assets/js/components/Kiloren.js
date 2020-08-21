import imageDesktop from "../../images/kiloren-2x.jpg";
import imageMobile from "../../images/kiloren.jpg";
import createElement from "../helper/createElement";

createElement();

const Kiloren = (
	<div className="full-width">
		<picture>
			<source media="(min-width: 1024px)" srcset={imageDesktop} />
			<img src={imageMobile} alt="droids" />
		</picture>
	</div>
);

export default Kiloren;
