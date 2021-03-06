import React from "react";
import "../index.css";
import {proxy} from "../utilis"

class Technologie extends React.Component {
	state={

		affiché: true,			
		articles: []

	}

	componentDidMount(){
		this.articleGet()
	}



	articleGet(titleArticle, contenuArticle) {
		

		fetch(proxy + "/api/culture-pop/technologie", {

			method: "GET",			
			
			

			headers: {
				//"Content-Type": "application/json"
				"Content-Type": "application/x-www-form-urlencoded"
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
		

		fetch(proxy + "/api/culture-pop/technologie/" + id, {

			method: "DELETE",

			headers: {
				//"Content-Type": "application/json"
				//'Access-Control-Request-Headers':'*',
				"Content-Type": "application/x-www-form-urlencoded"
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

			return article.categorie === "technologie"			

		})


		
		const map = articleFilter.map((articleFilter) => (

					<div className="conteneurSystemeSco" key={articleFilter._id}>
					  <h1>{articleFilter.titleArticle}</h1>
					 <p>{articleFilter.contenuArticle}</p>
					
					 </div>
					 
				)); 


		

		return ( 
		
			<div className="tall">						
             {map}
                      
            	
			</div>
		);
	}

}


export default Technologie;