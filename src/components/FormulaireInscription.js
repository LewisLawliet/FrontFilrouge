import React from "react";
import {proxy} from "../utilis";

class FormulaireInscription extends React.Component {
	state = {
		formInscription: true,
		envoye: false,
		username: "",
		email: "",
		password: "",
		afterSetTimeOut: ""
	}

	handleClick = e =>  {
		e.preventDefault();
		//console.log(this.state);

		const {username, password, email} = this.state;
		this.signup(username, password, email);
		this.setState({envoye: true })

	} 





	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value })

	}


	signup(username, password, email){
		

		fetch(proxy+"/api/auth/signup", {

			method: "POST",			
			
			body: JSON.stringify({
				
				name: username,
				password,
				email
			}),

			headers: {				
				      Accept: 'application/json',				     
	         		 'Accept-encoding': 'gzip, deflate',
	                 'Content-Type': 'application/json',
	                 'Access-Control-Request-Headers':'*'
			}

		
		})


		.then(res => {
			if (res.status === 201) {
				res.json().then(res => {
					console.log("It's work")
					//this.props.inscriptionRéussie()
				})

				this.props.inscriptionRéussie()

			}

			else {
				if (res.status !== 201) {
				console.log("User non crée")				
				
				console.log(this.props.emailDansMongo)
					this.props.emailDansMongo()
													
		     		

						
				}
			}
		})

		.catch(errors =>{
			console.log(errors)
			console.log("catch")
		})

					

				
	}

	handleSubmit(e) {
			e.preventDefault();
			
		}

	render(){
		//console.log(this.props.emailDansMongo)
		console.log(this.props.inscriptionRéussie)

		return ( 

			<div>
			<form className="contourForm" onSubmit={this.handleClick}>			   
			       
			       <input type="text" name="username" onChange={this.handleChange.bind(this)}
			        className = "champsForm" placeholder="Name" required minLength="4" /><br />  

			       <input type="password" name="password" onChange={this.handleChange.bind(this)}
			        className = "champsForm" placeholder="Choose password" required minLength="4" /><br />

			       <input type="email" name="email" onChange={this.handleChange.bind(this)}
			        className = "champsForm" placeholder="Choose email" required /><br />
			        
			       <button className = "champsForm envoyer">Envoyer</button>
			   
			</form>
		</div>	

		)
	}

} 




export default FormulaireInscription;