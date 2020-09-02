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