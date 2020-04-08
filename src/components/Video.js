import React from 'react';
import '../index.css';

class Video extends React.Component {
    render() {
        return (

        <div className="videoConteneur">	
        		
            <video autoplay width="100%" height="300px" className="JapanVideo" loop>

            <source src="./images/JapanBackground.webm" />
            

    
            </video>

		         
		</div>	
        );
    }
}


export default Video;