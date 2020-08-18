import React from 'react';
import '../index.css';

class Contact extends React.Component {
    render() {
        return (

        <div className="contactConteneur">	
        	<div className="contactColor">	
	           <h1>Contact</h1>
			   <p>Pour nous contacter, <br />envoie-nous un message à gaidjininforme@gmail.com </p>
			   <img src="./images/email.png" srcSet="./images/email.png 1200w, ./images/email.png 1200h"
                alt="courriel" className ="imgEmail" /> 
			</div>        
		</div>	
        );
    }
}


export default Contact;