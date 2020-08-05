import React from "react";
import "../index.css";

class MondePro extends React.Component {
	render(){

		return (
			<div className="conteneurMondePro">
				<h1>T-FREND: Le drône chasseur</h1>
				<div className="histoireFugu">
				<p>
	Le drone fait une ronde à partir d'une certaine heure et diffuse la chanson écossaise "Auld Lang Syne"
	 ("Ce n'est qu'un au revoir" en français) pour inciter les employés à quitter leur bureau.
Pour lutter contre le phénomène typiquement japonais des heures supplémentaires à rallonge,
 une société du pays croit avoir trouvé la solution : un drone au bureau, chassant en musique à partir d'une certaine heure
  les employés trop zélés.

"Ce n'est qu'un au revoir". Le drone "T-Frend" rôde autour de ceux qui tentent de travailler trop tard le soir,
 leur envoyant dans les oreilles la chanson écossaise "Auld Lang Syne" (connue sous le titre "Ce n'est qu'un au revoir" en français)
 , souvent utilisée au Japon pour annoncer la fermeture imminente des magasins.

"Vous ne pouvez pas travailler quand vous vous dites : 'il [le drone] va bientôt arriver maintenant'
 et que vous entendez Auld Lang Syne en plus de ses vibrations", a déclaré jeudi lors d'une conférence
  de presse Norihito Kato, un dirigeant de Taisei, société de sécurité et de nettoyage qui a co-développé le système.
 				</p>
 				<h2>Une caméra et une ronde préenregistrée</h2>
 				<p>Le drone est équipé d'une caméra dont les images peuvent être vues en temps réel à distance,
 				 et enregistrées. Les développeurs du drone examinent la possibilité de le doter 
 				  d'une technologie de reconnaissance faciale, afin de pouvoir identifier les employés,
 				   ou de vérifier s'il ne s'agit pas d'intrus. 

L'engin volant fait ses rondes de manière autonome, sur un trajet pré-programmé. Taisei compte 
le mettre en service en avril au Japon, pour un prix d'environ 500.000 yens (environ 3.770 euros au cours actuel),
 selon Norihito Kato.

Pallier au manque de personnel. Les employeurs japonais se sont jusqu'à présent tournés vers des sociétés
 de sécurité pour inciter le personnel à cesser le travail à partir d'une certaine heure le soir. 
 Mais ces sociétés elles-mêmes manquent de personnel pour remplir cette tâche ingrate,
  dans un contexte de pénurie de main-d'oeuvre dans le pays.</p>
 				
 				</div>

 				<div className="anecdoteTFrend">
 				<p>La mort par surmenage, un fléau. Sans grand succès, 
 				le gouvernement tente depuis des années de changer la culture d'entreprise dans le pays,
 				 où travailler plus longtemps que les autres est perçu comme une preuve de loyauté et de dévouement. 
 				 La mort par surmenage au travail - crise cardiaque, accident vasculaire cérébral,
 				  suicide - a même son nom au Japon : "karoshi". En octobre, un rapport du gouvernement avait évalué à 191 
 				  les cas de "karoshi" sur l'année fiscale achevée fin mars, et souligné que 7,7% 
 				  des salariés japonais effectuent plus de 20 heures supplémentaires par semaine.</p>
				<a href="https://www.youtube.com/watch?v=yNI5BghFmn0" target="_blank"  rel="noopener noreferrer">
				<img src="./images/T-Frend.jpg"  alt="monde pro Japonais" srcSet="./images/T-Frend.jpg 1522w " className ="imgTFrend" /></a>
 				</div>
			</div>

		);
	}

}

export default MondePro;