import React from 'react';
import '../index.css';



class BackGastronomie extends React.Component {

state={

		envoyé:false,
		titleArticle: "",
		contenuArticle: "",
		articles: [],
		affiché: false

	}

componentDidMount(){
		this.articleGet()
	}

	

	handleClick = e =>  {
		//e.preventDefault();
		//console.log(this.state);

		const {titleArticle, contenuArticle, categorie} = this.state;
		this.article(titleArticle, contenuArticle, categorie);
		this.setState({envoye: true })

	} 

	
	handleClickPut = e =>  {
		e.preventDefault();
		//console.log(this.state);

		const {titleArticle, contenuArticle, categorie} = this.state;
		this.articlePut(titleArticle, contenuArticle, categorie);
		this.setState({envoye: true })

	} 




	handleChange(e) {
		e.preventDefault();
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
				"Content-Type": "application/json"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					console.log("Article posté")
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
     articleGet(titleArticle, contenuArticle) {
		

		fetch("http://localhost:3200/api/culture-pop/gastronomie", {

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

	articlePut(id, titleArticle, contenuArticle, categorie) {
		

		fetch("http://localhost:3200/api/societe/culture-pop/gastronomie/" + id, {

			method: "PUT",			
			
			body: {
				
				
				titleArticle,
				contenuArticle,
				categorie
			},  

			headers: {
				"Content-Type": "application/json",
				'Access-Control-Request-Headers':'*',
				'Accept-encoding': 'gzip, deflate',
				"Content-Type": "application/x-www-form-urlencoded"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {					
					console.log("Puuut Article ^^")
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


    render() {

    	const {articles} = this.state;		
							
			const articleFilter = articles.filter((article) => {

			return article.categorie === "gastronomie"			

		})


		
		const map = articleFilter.map((articleFilter) => (

					<div className="conteneurSystemeSco" key={articleFilter._id}>
					  <h1>{articleFilter.titleArticle}</h1>

					 <p>{articleFilter.contenuArticle}</p>

					 <button onClick={this.articleDelete.bind(this, articleFilter._id)}>ERASE</button>
					 
			<form className="PutForm" onSubmit = {this.handleClickPut}>	 
					 <input type="text" name="titleArticle" defaultValue={articleFilter.titleArticle}
					  onChange={this.handleChange.bind(this)} />

					 <textarea rows="30" name="contenuArticle"  defaultValue={articleFilter.contenuArticle}
					 onChange={this.handleChange.bind(this)} />

					 <input type="text" name="categorie" placeholder="categorie"
				 onChange={this.handleChange.bind(this)} className="categorie"/>

					 <button onClick={this.articlePut.bind(this, articleFilter._id)} >PUT</button>
			</form>		 
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