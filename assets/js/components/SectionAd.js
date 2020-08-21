import image from "../../images/adgame.jpg";
import createElement from "../helper/createElement";

createElement();

const title = "Star Wars, The Force Awaken";

const SectionAd = (
	<section className="is-flex" id="sectionAd">
		<article id="article" className="is-mobile is-half-width-desktop">
			<div className="c-article">
				<h2>{title}</h2>
				<p>
					Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
					avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
					devenus la « Résistance », combattent les vestiges de l'Empire réunis
					sous la bannière du « Premier Ordre ».
				</p>
				<p>
					Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
					et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
					même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
					planète désertique Jakku, va faire la rencontre de Finn, un
					Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
				</p>
				<p>
					Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
					avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
					devenus la « Résistance », combattent les vestiges de l'Empire réunis
					sous la bannière du « Premier Ordre ».
				</p>
				<p>
					Un mystérieux guerrier, <u>Kylo Ren</u>, semble vouer un culte à{" "}
					<u>Dark Vador</u> et pourchasse les ennemis du Premier Ordre à travers
					la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse
					d'épaves sur la planète désertique Jakku, va faire la rencontre de
					Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
				</p>
				<p>
					Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
					avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
					devenus la « <u>Résistance</u> », combattent les vestiges de l'Empire
					réunis sous la bannière du « <u>Premier Ordre</u> ».
				</p>
				<p>
					Un mystérieux guerrier, Kylo Ren, semble vouer un culte à{" "}
					<u>Dark Vador</u> et pourchasse les ennemis du Premier Ordre à travers
					la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse
					d'épaves sur la planète désertique Jakku, va faire la rencontre de
					Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
					!
				</p>
			</div>
		</article>
		<aside class="is-half-width">
			<img alt="pub" src={image} id="ad" className="c-ad-img" />
		</aside>
	</section>
);

export default SectionAd;
