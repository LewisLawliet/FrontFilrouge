import React from "react";
import "../index.css";

class Gastronomie extends React.Component {
	render(){

		return (
			<div className="conteneurGastronomie">
				<h1>Un poisson fatal</h1>
				<div className="histoireFugu">
				<p>
	D’après le ministère de la Santé, du Travail et des Affaires sociales, plus de la moitié des décès consécutifs à une intoxication
 alimentaire au Japon sont dus au fugu. Chaque année, il est à l’origine d’une trentaine d’intoxications, dans lesquelles une 
 cinquantaine de personnes sont empoisonnées. La moitié n’y survivent pas.

Le poison à l’œuvre s’appelle la tétrodotoxine, et son danger connaît d’importantes variations en fonction du type de fugu ingéré, 
et de la partie de la chair qui est consommée. La tétrodotoxine est généralement plus concentrée dans le foie, les ovaires et la peau,
 mais les parties comestibles varient selon le type de poisson. Une personne en ayant avalé ressentira vingt minutes à trois heures 
 plus tard d’abord un fourmillement, puis une paralysie qui s’étendra à l’ensemble du corps, pour finir par des difficultés 
 respiratoires qui causeront le décès. Les Japonais mangent du fugu malgré ce risque.
 Cadre légal
 Seuls les cuisiniers disposant d'une licence accordée par l'État sont autorisés à préparer ce plat
  considéré comme très raffiné. Pour autant, pour une question de sécurité, l'empereur du Japon
   tout comme les samouraïs n'avaient pas le droit d'en manger, une loi les en empêchant 
   (cette loi étant toujours d'actualité pour l'empereur). Pour en retirer la toxine, il leur faut enlever
    notamment la peau, le foie, les intestins et les gonades.
 				</p>
 				
 				</div>

 				<div className="anecdoteFugu">
 				<p>En 1975, dans un restaurant de Kyoto, Bandō Mitsugorō VIII (un des plus célèbres acteurs de théâtre japonais) 
 				voulut prouver à ses amis qu'il pouvait manger du foie de poisson globe, réputé pour son poison, 
 				sans aucun problème !
				Il mourut dans la nuit...</p>
				<a href="https://www.youtube.com/watch?v=t3_Dbxtxb3U" target="_blank"  rel="noopener noreferrer">
				<img src="./images/fugu.jpg" srcSet="./images/fugu.jpg 1200w" className ="imgFugu" /></a>
 				</div>

			</div>

		);
	}

}

export default Gastronomie;