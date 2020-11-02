import React from "react";
import "../index.css";
import BackAdmin from "./BackAdmin";
import {proxy} from "../utilis";

class SystemeSco extends React.Component {
	state={

		affiché: true,			
		articles: []

	}

	componentDidMount(){
		this.articleGet()
	}



	articleGet(titleArticle, contenuArticle) {
		const jwt = localStorage.getItem("jwt")
		
		fetch(proxy + "/api/societe/systeme-sco", {

			method: "GET",			
			
			

			headers: {
				"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",				
				//"Authorization": `bearer ${localStorage.getItem("jwt")}` 
				//"Authorization": `jwt`
				 
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					this.state.articles = res.article;
					this.setState({...this.state.articles});//this.setState({article: res})
					console.log(this.state.articles)
					
							
				})
				

			}

			else {

				console.log("Article non get fréro")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})
			

				
	}

	articleDelete(id) {
		

		fetch(proxy + "/api/societe/systeme-sco/" + id, {

			method: "DELETE",

			headers: {
				//"Content-Type": "application/json"
				//'Access-Control-Request-Headers':'*',
				"Content-Type": "application/x-www-form-urlencoded",
				//"Authorization": `bearer ${localStorage.getItem("jwt")}` 
			}			
			
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					this.setState({article: res})
					document.location.reload(true);					
					console.log("Supprimé bro ^^")

				})
				
				

			}

			else {

				console.log("Article non supprimé fréro")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		}) 



					

				
	} 

 /*deleteOnclick = (_id) => {
 	
 	this.articleDelete(_id)
 	
 }*/




	render(){

			const {articles} = this.state;		
							
			const articleFilter = articles.filter((article) => {

			return article.categorie === "systeme-sco"			

		})


		
		const map = articleFilter.map((articleFilter) => (

					<div className="conteneurSystemeSco" key={articleFilter._id}>
					  <h1>{articleFilter.titleArticle}</h1>
					 <p>{articleFilter.contenuArticle}</p>
					
					 </div>
					 
				)); 

		console.log(articleFilter)
		

		return ( 
		
			<div className="tall">						
             {map}
                      
            	
			</div>
		);
	}

}

export default SystemeSco;

