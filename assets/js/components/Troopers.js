import imageMobile from "../../images/stormtroopers.jpg";
import imageDesktop from "../../images/stormtroopers-2x.jpg";
import createElement from "../helper/createElement";

createElement();

const Troopers = (
	<div className="full-width">
		<picture>
			<source media="(min-width: 1024px)" srcset={imageDesktop} />
			<img src={imageMobile} alt="StormTroopers" />
		</picture>
	</div>
);

export default Troopers;
