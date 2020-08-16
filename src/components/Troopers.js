import image from "../../assets/images/stormtroopers-2x.jpg";
import createElement from "../helper/createElement";

createElement();

const Troopers = (
	<div className="full-width">
		<img alt="StormTroopers" src={image} />
	</div>
);

export default Troopers;
