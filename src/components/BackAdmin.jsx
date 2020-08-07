import React from 'react';
import '../index.css';



class BackAdmin extends React.Component {

state={

		envoyé:false,
		titleArticle: "",
		contenuArticle: "",
		articles: [],
		affiché: false

	}

/*const token = localStorage.getItem("jwt")
if(!token){
	this.props.history.push("/")
} */	


	

	handleClick = e =>  {
		//e.preventDefault();
		//console.log(this.state);

		const {titleArticle, contenuArticle, categorie} = this.state;
		this.article(titleArticle, contenuArticle, categorie);
		this.setState({envoye: true })

	} 

	




	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value })

	}

	article(titleArticle, contenuArticle, categorie) {
		

		fetch("http://localhost:3200/api/societe/systeme-sco", {

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
	////////////////////////////////////////  PUT /////////////////////////////////////////////////////

	articlePut(titleArticle, contenuArticle, categorie) {
		

		fetch("http://localhost:3200/api/societe/systeme-sco/:id", {

			method: "PUT",			
			
			body: JSON.stringify({
				
				
				titleArticle,
				contenuArticle,
				categorie
			}),  

			headers: {
				//"Content-Type": "application/json"
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

	articleDelete(titleArticle, contenuArticle) {
		

		fetch("http://localhost:3200/api/societe/systeme-sco/:id", {

			method: "DELETE",

			headers: {
				//"Content-Type": "application/json"
				"Content-Type": "application/x-www-form-urlencoded"
			}			
			
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {					
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

 deleteOnclick = (id) => {
 	
 	this.articleDelete(id)
 	
 }


    render() {
        return (


           
			<div className ="">
			
				
			<form className="conteneurBack" onSubmit={this.handleClick}>
				<input type="text" name="titleArticle" placeholder="titleArticle" 
				onChange={this.handleChange.bind(this)} className="title"/><br />
				
				<textarea rows="30" name="contenuArticle" placeholder="contenuArticle" 
				onChange={this.handleChange.bind(this)} className="contenu"></textarea><br />


				<input type="text" name="categorie" placeholder="categorie"
				 onChange={this.handleChange.bind(this)} className="categorie"/>

				<button>ENVOYER ARTICLE</button>
			</form>

			<div>
				

				<button  onChange={this.handleChange.bind(this)}>GET</button>
				
			</div> 

				<button onClick={this.deleteOnclick.bind(this)} onChange={this.handleChange.bind(this)}>DELETE</button>

			</div>
		
		
        );
    }
}


export default BackAdmin;