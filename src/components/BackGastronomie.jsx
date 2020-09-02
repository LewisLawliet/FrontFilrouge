import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


class BackGastronomie extends React.Component {

state={

		
		titleArticle: "",				
		articles: [],
		contenuArticle: ""
		

	}

componentDidMount(){
		this.articleGet()
	}

	

	handleClick = e =>  {
		e.preventDefault();
		//console.log(this.state);

		const {titleArticle, contenuArticle, categorie} = this.state;
		this.article(titleArticle, contenuArticle, categorie);
		

	} 

	
	handleClickPut = e =>  {
		e.preventDefault();
		//console.log(this.state);
		const articles = this.state;
		//const {titleArticle, contenuArticle} = this.state;
		//this.articlePut(titleArticle, contenuArticle);
		

	} 




	handleChange = e => {
		
		this.setState({ [e.target.name]: e.target.value })

	}

	article(titleArticle, contenuArticle, categorie) {
		

		fetch("http://localhost:3200/api/culture-pop/gastronomie", {

			method: "POST",			
			
			body: JSON.stringify({
				
				
				titleArticle,
				contenuArticle,
				categorie
			}),

			headers: {
				"Content-Type": "application/json",
				"Authorization": `bearer ${localStorage.getItem("jwt")}`
			}

		
		})


		.then(res => {
			if (res.status === 201) {
				res.json().then(res => {					
					console.log("Article posté")
					this.articleGet()
				})

			}

			else {

				console.log("Article non posté")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})

					

				
	}


     //////////////////////////////////////// GET  ////////////////////////////////////////////////////
     articleGet(titleArticle, contenuArticle, categorie) {
		

		fetch("http://localhost:3200/api/culture-pop/gastronomie", {

			method: "GET",			
			
			

			headers: {
				"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					this.state.articles = res.article;
					this.setState({article: res})//this.setState({...this.state.articles});
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


	////////////////////////////////////////  PUT /////////////////////////////////////////////////////

	articlePut(id, articles) {
		

		fetch("http://localhost:3200/api/societe/systeme-sco/" + id, {

			method: "PUT",			
			
			body: new URLSearchParams (this.state),  

			headers: {
				"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `bearer ${localStorage.getItem("jwt")}`
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {					
					console.log("Puuut Article ^^")
					//this.articleGet()					
					console.log(id)
					this.setState({titleArticle: ""})
					this.setState({contenuArticle: ""})
					this.articleGet()

				})

				
			

			}

			else {

				console.log("Article non put fréro")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		}) 

			

				
	} 


	//////////////////////////////////DELETE/////////////////////////

	articleDelete(id) {
		

		fetch("http://localhost:3200/api/culture-pop/gastronomie/" + id, {

			method: "DELETE",

			headers: {
				//"Content-Type": "application/json"
				//'Access-Control-Request-Headers':'*',
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `bearer ${localStorage.getItem("jwt")}` 
			}			
			
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					this.setState({article: res})
					this.articleGet();					
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


    render() {

    	const {articles} = this.state;		
							
			const articleFilter = articles.filter((article) => {

			return article.categorie === "gastronomie"			

		})


		
	const map = articleFilter.map((articleFilter) => (

					<div className="conteneurSystemeSco" key={articleFilter._id}>
					  <h1>{articleFilter.titleArticle}</h1>

					 <p>{articleFilter.contenuArticle}</p>

					 <button className="eraseButton" onClick={this.articleDelete.bind(this, articleFilter._id)}>ERASE</button>
					 
			<form className="PutForm" onSubmit={this.handleClickPut.bind(this)}>	 
					 <input type="text" name="titleArticle" defaultValue={articleFilter.titleArticle}
					  onChange={this.handleChange}  />

					 <textarea rows="30" name="contenuArticle"  defaultValue={articleFilter.contenuArticle}
					 onChange={this.handleChange}  />

					 {/*<input type="text" name="categorie" defaultValue={articleFilter.categorie}
				 onChange={this.handleChange.bind(this)}  />*/}

					 <button onClick={this.articlePut.bind(this, articleFilter._id)}>PUT</button>
			</form>		 
			<Link className="ButtonRetourBaback" to="/baback">retour au menu</Link>
					 </div>
					
					 
				)); 

        return (


           
			<div className ="postArticle">
			
				
			<form className="conteneurBack" onSubmit={this.handleClick}>
				<input type="text" name="titleArticle" placeholder="titleArticle" 
				onChange={this.handleChange.bind(this)} className="title"/><br />
				
				<textarea rows="30" name="contenuArticle" placeholder="contenuArticle" 
				onChange={this.handleChange.bind(this)} className="contenu"></textarea><br />


				<input type="text" name="categorie" placeholder="categorie"
				 onChange={this.handleChange.bind(this)} className="categorie" defaultValue="gastronomie" />

				<button>ENVOYER ARTICLE</button>
			</form>

			<div>
				
				{map}
				{/*<button  onChange={this.handleChange.bind(this)}>GET</button>*/}
				
			</div> 

				

			</div>
		
		
        );
    }
}


export default BackGastronomie;