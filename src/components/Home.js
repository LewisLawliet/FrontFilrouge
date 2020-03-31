import React from 'react';
import '../index.css';


import  {  withRouter} from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
     <div className="homeConteneur">	
        
     	<h1>Hey !</h1>  
     	   

	 </div>			
        );
    }
}

export default withRouter(Home);
