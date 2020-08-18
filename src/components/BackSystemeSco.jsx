import React from 'react';
import '../index.css';



class BackSystemeSco extends React.Component {

state={

		
		titleArticle: "",
		contenuArticle: "",
		articles: []
		

	}

componentDidMount(){
		this.articleGet()
	}

	

	handleClick = e =>  {
		//e.preventDefault();
		//console.log(this.state);

		const {titleArticle, contenuArticle, categorie} = this.state;
		this.article(titleArticle, contenuArticle, categorie);
		

	} 


	handleClickPut = e =>  {
		//e.preventDefault();
		//console.log(this.state);

		const {_id, titleArticle, contenuArticle, categorie} = this.state;
		this.articlePut(_id, titleArticle, contenuArticle, categorie);
		

	}
	 

	  handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


	/*handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value })

	}*/

	article(titleArticle, contenuArticle, categorie) {
		const test = "http://localhost:3200/api/societe/systeme-sco"

		fetch("http://localhost:3300/api/societe/systeme-sco", {

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
		

		fetch("http://localhost:3300/api/societe/systeme-sco", {

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
		

		fetch("http://localhost:3200/api/societe/systeme-sco/" + id, {

			method: "PUT",			
			
			body: JSON.stringify({
				
				
				titleArticle,
				contenuArticle,
				categorie
			}),  

			headers: {
				"Content-Type": "application/json",
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
		

		fetch("http://localhost:3200/api/societe/systeme-sco/" + id, {

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
					//document.location.reload(true);					
					console.log("Supprimé bro ^^")
					this.articleGet()

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

			return article.categorie === "systeme-sco"			

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

					 <button  onClick={this.articlePut.bind(this, articleFilter._id)} >PUT</button>
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
				 onChange={this.handleChange.bind(this)} className="categorie" defaultValue="systeme-sco" />

				<button>ENVOYER ARTICLE</button>
			</form>

			<div>
				
				{map}
				
				
			</div> 

				

			</div>
		
		
        );
    }
}


export default BackSystemeSco;