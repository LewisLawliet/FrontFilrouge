import React from 'react';
import '../index.css';
import Video from './Video';

import  {  withRouter} from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
     <div className="homeConteneur">
     <Video />	
        
     	 
     	   

	 </div>			
        );
    }
}

export default withRouter(Home);
