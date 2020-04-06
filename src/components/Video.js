import React from 'react';
import '../index.css';

class Video extends React.Component {
    render() {
        return (

        <div>	
        		<video loop autoplay className="JapanVideo">

              <source src="./images/JapanBackground.webm" />
              <source src="" />
              <source src="" />

            </video>


		         
		</div>	
        );
    }
}


export default Video;