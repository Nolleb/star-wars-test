import image from "../../assets/images/r2d2_c3p0-2x.jpg";
import createElement from "../helper/createElement";

createElement();

const SectionLast = (
	<section>
		<h1 class="has-text-center">A long time ago, in a galaxy far, far away…</h1>
		<article>
			<div class="o-media">
				<img alt="droids" src={image} />
				<p>
					La Guerre des étoiles (titre original Star Wars, soit littéralement
					Guerres Stellaires ) est une épopée cinématographique de
					science-fiction créée par George Lucas, considérée comme un élément
					phare du space opera. Prévue à la base pour être une suite de trois
					trilogies (triptyque), Lucas fut contraint, par manque de moyens
					techniques, de commencer par la seconde trilogie (l'Épisode IV - Un
					nouvel espoir) en 1977. La série connut un succès phénoménal partout
					dans le monde et engendra une très importante communauté de fans. Sans
					prétendre expliquer le succès du premier film (s'il y avait une
					recette, cela se saurait), on peut, toutefois, noter que, malgré le
					manque de moyens (le budget était relativement modeste, les acteurs
					presque inconnus) :
				</p>
			</div>
			<p>
				- Il fait appel à des références connues et appréciées des jeunes de
				l'époque : films de cape et d'épée, westerns, péplums, contes de fées et
				même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre n'apparaît
				pas comme de la science-fiction au sens strict mais plutôt comme du
				space fantasy. - Les effets spéciaux, supervisés par Ken Ralston,
				étaient réellement novateurs, avec notamment la participation de John
				Dykstra (qui a également participé au premier film de Star Trek), qui
				avait développé une nouvelle manière d'animer les maquettes des
				vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
				- Le film a développé un univers cohérent, avec, comme préoccupation
				constante, autant la création d'une ambiance que l'action proprement
				dite. - La musique, composée par John Williams, introduit des thèmes
				récurrents et des leitmotivs (procédé classique mais renforçant la
				cohérence).
			</p>
		</article>
	</section>
);

export default SectionLast;
