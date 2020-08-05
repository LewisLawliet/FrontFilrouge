import React from 'react';
import '../index.css';

/*class Quizz extends React.Component {

	Quizz(reponse){

		let token = localStorage.getItem("jwt")

		if(!token)
			this.props.history.push("/")


		fetch("http://localhost:3200/api/quizz", {

						
			
			body: JSON.stringify({
								
				reponse
			}),

			headers: {
				"Content-Type": "application/json"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					console.log("It's work")
					
				})

			}

			else {

				console.log("User non crée")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})
    render() {
        return (

        <div className="">	
        		
                
		</div>	
        );
    }

}


export default Quizz;