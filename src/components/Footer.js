import React from 'react';
import '../index.css';
import MentionsLegales from './MentionsLegales';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (


           <footer>
			<div className ="menuF">
			
				
					<ul className ="ulFooter">
						<li><Link to="/Apropos">Apropos</Link></li>
						<li><Link to="/mentions-legales">Mentions légales</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						
					</ul>
			</div>
		
		</footer>
        );
    }
}


export default Footer;