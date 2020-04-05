import React from 'react';
import '../index.css';

class Header extends React.Component {
    render() {
        return (


           <header>
			<div className ="menu">
					<div className ="menu2">

							<div className ="logo">
								<a href="http://localhost:3000"><img src="./images/Logo.png" className ="imglogo" /></a>
							</div>


						<div className ="imgEtOngletMenu">	
							<img src="./images/SoleilCouchant.jpg" className ="imgNd" />
							
							<div className="conteneurOngletMenu">	
								<ul className="ongletMenu">
									<li><a href="">Société</a></li>
									<li><a href="">Culture pop</a></li>
									<li><a href="">Quizz</a></li>
								
								</ul>
							</div>
						</div>
						
					</div>
			</div>
			
		</header>
        );
    }
}


export default Header;