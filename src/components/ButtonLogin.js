import React from 'react';
import '../index.css';
import FormulaireConnexion from "./FormulaireConnexion";

class ButtonLogin extends React.Component {
	state = {
		formConnexion: false,
		closeForm: false
	}

	handleClick(e) {
		//e.preventDefault();
		this.setState({formConnexion: !this.state.formConnexion});
				
	}

	


	formClosed(){

		this.setState({closeForm: true})
	}

	
	formCancel(){
		
		

	}


    render() {
    	console.log(this.props.mistakeIdOrPassword)
     	

    		const formulaire = (<FormulaireConnexion formNotOpen={this.formClosed.bind(this)}
    		errorConnexion={this.props.mistakeIdOrPassword} changeSet ={this.props.change} checkAdmin={this.props.admin} />);

    
          //const formCancel =

    	
    	//console.log(this.state.connecte);
        return ( 

        <div className="buttonConteneur2">	
        	
       		
           <button className ="buttonLogin" 
          	onClick={this.handleClick.bind(this)} >Login</button> 
           {this.state.formConnexion ? formulaire : null} 
           {this.state.closeForm ? this.formCancel.bind(this) : null }	
                  
          	
           
		         
		</div>
		)	
       
    }
}


export default ButtonLogin;