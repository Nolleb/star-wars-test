import image from "../../images/r2d2_c3p0-2x.jpg";
import createElement from "../helper/createElement";

createElement();

const SectionLast = (
	<section>
		<h1 className="has-text-center">
			A long time ago, in a galaxy far, far away…
		</h1>
		<article id="article2">
			<div className="o-media c-article">
				<img alt="droids" src={image} />
				<p className="o-media__content">
					<b>
						<i>La Guerre des étoiles</i>
					</b>{" "}
					(titre original{" "}
					<b>
						<i>Star Wars</i>
					</b>
					, soit littéralement Guerres Stellaires ) est une épopée
					cinématographique de science-fiction créée par George Lucas,
					considérée comme un élément phare du space opera. Prévue à la base
					pour être une suite de trois trilogies (triptyque), Lucas fut
					contraint, par manque de moyens techniques, de commencer par la
					seconde trilogie (
					<b>
						<i>l'Épisode IV - Un nouvel espoir</i>
					</b>
					) en 1977. La série connut un succès phénoménal partout dans le monde
					et engendra une très importante communauté de fans. Sans prétendre
					expliquer le succès du premier film (s'il y avait une recette, cela se
					saurait), on peut, toutefois, noter que, malgré le manque de moyens
					(le budget était relativement modeste, les acteurs presque inconnus) :
				</p>
			</div>
			<div className="c-article">
				<p>
					- Il fait appel à des références connues et appréciées des jeunes de
					l'époque : films de cape et d'épée, westerns, péplums, contes de fées
					et même{" "}
					<b>
						<i>le Seigneur des Anneaux</i>
					</b>{" "}
					de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la
					science-fiction au sens strict mais plutôt comme du space fantasy.
				</p>
				<p>
					- Les effets spéciaux, supervisés par Ken Ralston, étaient réellement
					novateurs, avec notamment la participation de John Dykstra (qui a
					également participé au premier film de{" "}
					<b>
						<i>Star Trek</i>
					</b>
					), qui avait développé une nouvelle manière d'animer les maquettes des
					vaisseaux en coordonnant leurs mouvements par ordinateur
					(Dykstraflex).
				</p>
				<p>
					- Le film a développé un univers cohérent, avec, comme préoccupation
					constante, autant la création d'une ambiance que l'action proprement
					dite.
				</p>
				<p>
					- La musique, composée par John Williams, introduit des thèmes
					récurrents et des leitmotivs (procédé classique mais renforçant la
					cohérence).
				</p>
			</div>
		</article>
	</section>
);

export default SectionLast;
