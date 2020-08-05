import React from 'react';
import '../index.css';
import SystemeSco from "./SystemeSco";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import MondePro from "./MondePro";
/*import ButtonSignup from './ButtonSignup';
import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';
import AffichageLoginLogout from './AffichageLoginLogout';*/


class Header extends React.Component {
	state={
		menuDeroulantSociete: false,
		menuDeroulantCulturePop: false,
		menuDeroulantQuizz: false
	}

	handleClick(){
		//event.preventDefault();
		this.setState({menuDeroulantSociete: true}) 
	}

	doubleHandleClick(){
		
		this.setState({menuDeroulantSociete: false})
		
	}

	handleClickDeux(){
		//event.preventDefault();
		this.setState({menuDeroulantCulturePop: true})
	}

	doubleHandleClickDeux(){
		
		this.setState({menuDeroulantCulturePop: false})
		//alert("It's work mother fucker")
	}

	handleClickTrois(){
		//event.preventDefault();
		this.setState({menuDeroulantQuizz: true})
	}

	doubleHandleClickTrois(){
		
		this.setState({menuDeroulantQuizz: false})
		//alert("It's work mother fucker")
	}


	    render() {
	    	const menuSociete = (
	    		<div className="societe">
	    			
	    			
	    				<Link to ="/systeme-sco">Systeme-sco</Link>
	    				<Link to ="/monde-pro">Monde-pro</Link>
	    			
	    		</div>
	    		);

	    	const menuCulturePop = (
	    		<div className="culturePop">
	    			
	    			
	    				<Link to="/gastronomie">Gastronomie</Link>
	    				<Link to ="/technologie">Technologie</Link>
	    			
	    		</div>
	    		);

	    	const quizz = (
	    		<div className="quizz">
	    			
	    			
	    				<a href="http://localhost:3000/api/quizz/systeme-sco">Quizz Systeme-sco</a>
	    				<Link to ="">Quizz Monde-pro</Link>
	    				<Link to ="">Quizz Gastronomie</Link>
	    				<Link to ="">Quizz Technologie</Link>

	    			
	    		</div>
	    		);


	        return (


	           <header>
				<div className ="menu">
						<div className ="menu2">

								<div className ="logo">
									<Link to="/"><img src="./images/Logo.png" className ="imglogo" /></Link>
									
								</div>
								

							<div className ="imgEtOngletMenu">	
								<img src="./images/SoleilCouchant.jpg" className ="imgNd" />
								
								<div className="conteneurOngletMenu">	
									
									<button className="bouttonSociete" onClick={this.handleClick.bind(this)} 
									 onDoubleClick={this.doubleHandleClick.bind(this) }>Société</button>
										
									<button className="bouttonCulturePop" onClick={this.handleClickDeux.bind(this)} 
									onDoubleClick={this.doubleHandleClickDeux.bind(this)}>Culture pop</button>

									<button className="bouttonQuizz" onClick={this.handleClickTrois.bind(this)}
									onDoubleClick={this.doubleHandleClickTrois.bind(this)}>Quizz</button>

									<br />
									{this.state.menuDeroulantSociete ? menuSociete : null}
									{this.state.menuDeroulantCulturePop ? menuCulturePop : null}
									{this.state.menuDeroulantQuizz ? quizz : null}
									
								</div>
							</div>
							
						</div>
				</div>
				
			</header>
	        );
	    }
	}




export default Header;