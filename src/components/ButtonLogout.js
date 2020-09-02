import React from 'react';
import '../index.css';
import { PropTypes } from 'react';

class ButtonLogout extends React.Component {
 state = {
 	refresh: false
 }

	effaceStorage () {
			
		console.log(localStorage)
		localStorage.removeItem("jwt")
		//this.setState({connecte: false});
		console.log(localStorage)
		//this.props.interm(true)
		//console.log(this.props.changeMonState)
		this.props.changeMonState()
			/*function setFunction (){	
				const connex = this.props.connexion;
				this.setState({connecte: false}).bind(this)	
				//document.location.reload(true)
				//window.location.reload()}
			}*/
		this.props.removeButton()	
	}
    render() {

    	console.log(this.props.removeButton)
        return (

        <div className="buttonConteneur">	
        		
           <button className ="buttonLogout" onClick={this.effaceStorage.bind(this)}
          	>Logout</button>
		         
		</div>	
        );
    }
}


export default ButtonLogout;