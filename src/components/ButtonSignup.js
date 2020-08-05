import React from 'react';
import '../index.css';
import FormulaireInscription from "./FormulaireInscription";

class ButtonSignup extends React.Component {
	state  = {
		formInscription: false,
		affichage: false,
		checkToken: ""
		
	} 


	  
	handleClick(e) {
		e.preventDefault();
		this.setState({formInscription: true});
				
	}

	doubleClick(){
		this.setState({formInscription: false});
	}





    render() {
    	console.log(this.props.emailExistant)
    	
    	const formumu = (
    		<FormulaireInscription 
    		emailDansMongo = {this.props.emailExistant} inscriptionRéussie = {this.props.successInscription} />
    			);
 		

        return (

        <div className="bigConteneurConnexion">	
        
        <div className="buttonConteneur">	
        		
           <button className ="buttonSignup" onClick={this.handleClick.bind(this)}
           onDoubleClick={this.doubleClick.bind(this)}  >Signup</button>
           {this.state.formInscription ? formumu : null}
           		
		   		    
           
			</div>
		</div>		
        );
    }
}


export default ButtonSignup;