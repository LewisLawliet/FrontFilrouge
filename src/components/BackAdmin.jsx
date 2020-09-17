import React from 'react';
import '../index.css';
import BackSystemeSco from "../components/BackSystemeSco";
import BackMondePro from "../components/BackMondePro";
import BackGastronomie from "../components/BackGastronomie";
import BackTechnologie from "../components/BackTechnologie";


import { Link } from 'react-router-dom';


class BackAdmin extends React.Component {


	componentDidMount (){

		this.userGet()
	}

	userGet = (admin, grade) => {
    

    fetch("http://localhost:3200/api/button/admin", {

     method: "GET",      
      
      

      headers: {
        //"Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `bearer ${localStorage.getItem("jwt")}` 
      }

    
    })


    .then(res => {
      if (res.status === 200) {
        res.json().then(res => {
         console.log("it's work")
              
        })
        

      }

      else {

        console.log("Que pour l'admin")
      	this.props.history.push("/")
      }
    })

    .catch(errors =>{
      console.log(errors);
    })
      

        
  }

    render() {

    	


        return (

         						
			
				
			<div className="conteneurSystemeSco baback"> 

				<Link className="buttonBack" to ="/backsystemesco">Articles Systeme-Sco</Link>
				<Link className="buttonBack" to ="/backmondepro">Articles Monde-Pro</Link>	
				<Link className="buttonBack" to ="/backgastronomie">Articles Gastronomie</Link>
				<Link className="buttonBack" to ="/backtechnologie">Articles Technologie</Link>	
			</div>
		
		
        );
    }
}


export default BackAdmin;