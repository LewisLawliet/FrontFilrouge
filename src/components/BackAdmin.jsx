import React from 'react';
import '../index.css';
import BackSystemeSco from "../components/BackSystemeSco";
import BackMondePro from "../components/BackMondePro";
import BackGastronomie from "../components/BackGastronomie";
import BackTechnologie from "../components/BackTechnologie";


import { Link } from 'react-router-dom';


class BackAdmin extends React.Component {


    render() {

    	


        return (

         						
			
				
			<div className="conteneurSystemeSco"> 

				<button className="buttonBack"><Link to ="/backsystemesco">Articles Systeme-Sco</Link></button>
				<button className="buttonBack"><Link to ="/backmondepro">Articles Monde-Pro</Link></button>	
				<button className="buttonBack"><Link to ="/backgastronomie">Articles Gastronomie</Link></button>
				<button className="buttonBack"><Link to ="/backtechnologie">Articles Technologie</Link></button>	
			</div>
		
		
        );
    }
}


export default BackAdmin;