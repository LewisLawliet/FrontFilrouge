import React from "react";
import "../index.css";

class MondePro extends React.Component {
		state={

		affiché: true,			
		articles: []

	}

	componentDidMount(){
		this.articleGet()
	}



	articleGet(titleArticle, contenuArticle) {
		

		fetch("http://localhost:3200/api/societe/monde-pro", {

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

	
					

				
	

 




	render(){

			const {articles} = this.state;		
							
			const articleFilter = articles.filter((article) => {

			return article.categorie === "monde-pro"			

		})


		
		const map = articleFilter.map((articleFilter) => (

					<div className="conteneurSystemeSco" key={articleFilter._id}>
					  <h1>{articleFilter.titleArticle}</h1>
					 <p>{articleFilter.contenuArticle}</p>
					 
					 </div>
					 
				)); 


		

		return ( 
		
			<div>						
             {map}
                      
            	
			</div>
		);
	}

}

export default MondePro;