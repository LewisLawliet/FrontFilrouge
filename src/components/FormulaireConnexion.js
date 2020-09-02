import React from "react";
import ButtonLogin from "./ButtonLogin";

class FormulaireConnexion extends React.Component {
	constructor(props){
    super(props)
    this.state = {
		//formInscription: true
		nonIdentifie: "",
		envoye: false,		
		username: "",
		email: "",
		password: ""
	//	affichage: false,
		//checkToken: ""
	}
}
	



	handleClick = e =>  {
		e.preventDefault();
		//console.log(this.state);

		const {username, password, email} = this.state;
		this.login(username, password, email);
		this.setState({envoye: true })
		//this.setState({username: ""})
					//this.setState({email: ""})
					//this.setState({password: ""})

	} 	
	


	handleChange(e) {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value })


	}

	login(username, password, email){
		

		fetch("http://localhost:3200/api/auth/login", {

			method: "POST",			
			
			body: JSON.stringify({
				
				name: username,
				password,
				email
			}),

			headers: {
				"Content-Type": "application/json"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					console.log("It's work")
					localStorage.setItem("jwt", res.token)
					
				
					this.props.changeSet()
					console.log(res.admin)
					/*if (res.admin === true) {
						
					}
					*/

					this.props.checkAdmin()
				})

			}

			else {

				console.log("User non trouvé")				
					this.props.formNotOpen()
					this.props.errorConnexion()						
					console.log(this.props.errorConnexion)
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})	

				
	}
		


	render(){
		
		console.log(this.props.checkAdmin)
		
		return (

			<div>			
			
			
			<form className="contourForm" onSubmit={this.handleClick}>			   
			       
			       <input type="text" name="username" placeholder="Name" 
			       onChange={this.handleChange.bind(this)} className = "champsForm" required minLength="4" /><br />    	

			       <input type="password" name="password" placeholder="Your password" autoComplete="current-password"
			        onChange={this.handleChange.bind(this)} className = "champsForm" required minLength="4" /><br />

			       <input type="email" name="email" placeholder="email"
			       onChange={this.handleChange.bind(this)} className = "champsForm" required /><br />

			       <button className = "champsForm envoyer">Envoyer</button>
			   		

			</form>

			
		</div>	

		)
	}

} 




export default FormulaireConnexion; 

