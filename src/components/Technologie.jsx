import React from "react";
import "../index.css";

class Technologie extends React.Component {
	render(){

		return (
			<div className="conteneurTechnologie">
				<h1>Aibo le robot qui a du chien</h1>
				<div className="histoireAibo">
				<p>
			Aibo, ça vous dit quelque chose ? Au Japon, tout le monde le connaît. Revues spécialisées, fan-clubs par dizaines,
			 sites Internet, cliniques spécialisées : tout existe pour célébrer ce chien-robot, beagle électronique « intelligent »,
			  capable de jouer et de réagir face aux humains, avec sa personnalité unique.

		Aucun Aibo ne se comporte de la même manière face aux souhaits de son maître. Propre et non porteur de microbes, 
		le chien est même rentré à l'hôpital, où certains professionnels de santé lui reconnaissent des vertus thérapeutiques.
		 Création de la firme Sony, Aibo a su prouver son efficacité, remonter le moral de certains patients perdus dans leur 
		 isolement et développer avec eux un véritable lien affectif.

		Le cas du chien Aibo pourrait être isolé, produit anecdotique d'un fabricant de jouets sur une niche marketing.
		 Mais aujourd'hui, de nombreuses entreprises japonaises croient à ce futur, très proche, où les robots auraient leur place,
		  chez vous.
 				</p>
 				
 				</div>

 				<div className="anecdoteAibo">
 				<p>Après la mort de son chien, Geneviève, soixante-quinze ans, a décidé de s’offrir Aibo,
 				 le premier chien-robot. Tous les avantages d’un animal de compagnie sans les contraintes.
 				 Un robot peut-il être notre ami ? Le peut-il et le doit-il ? Est-il nécessaire et suffisant 
 				 que notre ami éprouve des émotions ? Et si moi, j'éprouve des émotions, de la tendresse, 
 				 de l'affection pour un robot, cela signifie-t-il que ce ne sont pas de véritables émotions ou pas vraiment un robot ?

					Cela signifie-t-il qu'on peut construire un ami de toutes pièces, comme on construisait un ami imaginaire ?
					 Aimerons-nous le robot Aibo comme nous aimons Mickey ? Pour Geneviève, Aibo est un nouvel ami,
					  mais aussi une nouvelle relation, complexe, dense et profonde ... 
 				 </p>
				<a href="https://us.aibo.com/" target="_blank"  rel="noopener noreferrer"><img src="./images/Aibo4.jpg" className ="imgAibo" /></a>
 				</div>
			</div>

		);
	}

}

export default Technologie;