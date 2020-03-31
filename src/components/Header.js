import React from 'react';
import '../index.css';

class Header extends React.Component {
    render() {
        return (


           <header>
			<div className ="menu">
			
				<a href="http://localhost:3000"><img src="./images/SoleilCouchant.jpg" className ="imgNd" /></a>
					
				<div className="conteneurOngletMenu">	
					<ul className="ongletMenu">
						<li><a href="">Société</a></li>
						<li><a href="">Culture pop</a></li>
						<li><a href="">Quizz</a></li>
						
					</ul>
				</div>	
			</div>
			<hr/>
		</header>
        );
    }
}


export default Header;