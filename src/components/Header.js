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
		this.setState({menuDeroulantSociete: !this.state.menuDeroulantSociete}) 
	}

	
	handleClickDeux(){
		//event.preventDefault();
		this.setState({menuDeroulantCulturePop: !this.state.menuDeroulantCulturePop})
	}

	

	handleClickTrois(){
		//event.preventDefault();
		this.setState({menuDeroulantQuizz: !this.state.menuDeroulantQuizz})
	}

	


	    render() {
	    	const menuSociete = (
	    		<div className="societe">
	    			
	    			
	    				<Link to ="/systeme-sco" onClick={this.handleClick.bind(this)}>Systeme-sco</Link>
	    				<Link to ="/monde-pro" onClick={this.handleClick.bind(this)}>Monde-pro</Link>
	    			
	    		</div>
	    		);

	    	const menuCulturePop = (
	    		<div className="culturePop">
	    			
	    			
	    				<Link to="/gastronomie" onClick={this.handleClickDeux.bind(this)}>Gastronomie</Link>
	    				<Link to ="/technologie" onClick={this.handleClickDeux.bind(this)}>Technologie</Link>
	    			
	    		</div>
	    		);

	    	const quizz = (
	    		<div className="quizz">
	    			
	    			
	    				<Link to = "/quizz-systeme-sco" onClick={this.handleClickTrois.bind(this)}>Quizz Systeme-sco</Link>
	    				<Link to ="/quizz-monde-pro" onClick={this.handleClickTrois.bind(this)}>Quizz Monde-pro</Link>
	    				<Link to ="/quizz-gastronomie" onClick={this.handleClickTrois.bind(this)}>Quizz Gastronomie</Link>
	    				<Link to ="/quizz-technologie" onClick={this.handleClickTrois.bind(this)}>Quizz Technologie</Link>

	    			
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
									

									<div className="bouttonEtSonMenu">
										<button className="bouttonSociete" onClick={this.handleClick.bind(this)} 
										 >Société</button>
										 {this.state.menuDeroulantSociete ? menuSociete : null}

									</div>	


									<div className="bouttonEtSonMenu">		
										<button className="bouttonCulturePop" onClick={this.handleClickDeux.bind(this)} 
										>Culture pop</button>
										{this.state.menuDeroulantCulturePop ? menuCulturePop : null}
									</div>	


									<div className="bouttonEtSonMenu">
										<button className="bouttonQuizz" onClick={this.handleClickTrois.bind(this)}
										>Quizz</button>
										{this.state.menuDeroulantQuizz ? quizz : null}
									</div>	

									<br />
									
									
									
								</div>
							</div>
							
						</div>
				</div>
				
			</header>
	        );
	    }
	}




export default Header;