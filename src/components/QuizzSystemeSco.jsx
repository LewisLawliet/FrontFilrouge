import React from "react";
import "../index.css";
import GenerateQuiz from "generate-quiz";


class QuizzSystemeSco extends React.Component {

state={

		index: 0,
		affiché: true,			
		questions: [],
		reponse: "",
		goodAnswers: 0

	}

	componentDidMount = () => {
		this.questionGet()
	}


	handleClick = (e) =>  {
		
		e.preventDefault();
		
		//console.log(this.state);

		const {reponse} = this.state;
		this.questionPost(reponse);
		this.nextQuestion()
		this.setState({reponse: ""})

	} 

	handleClick2 = (id) => {
		console.log("Wesh gros")
	}

	

	handleChange = e => {
		
		this.setState({ [e.target.name]: e.target.value })

	}

	questionPost = (reponse) => {
		const id = document.getElementsByClassName("question")[0].getAttribute("id");
		fetch("http://localhost:3200/api/quizz/systeme-sco/" + id, {

			method: "POST",	

			headers: {
				"Content-Type": "application/json",
				//"Authorization": `bearer ${localStorage.getItem("jwt")}`
			},		
			
			body: JSON.stringify({
												
				reponse

			})



			/*headers: {
				"Content-Type": "application/json",
				//"Authorization": `bearer ${localStorage.getItem("jwt")}`
			}*/

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					console.log("Réponse postée")
					console.log(res)
					this.setState({reponse: ""})

					if(res.checkToogle == true){
						this.setState({goodAnswers: this.state.goodAnswers + 1})
					}
					
				})
			
			}

			else {

				console.log("Réponse non postée")
				this.setState({reponse: ""})			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})		
			

	}



	questionGet(libelle) {
		

		fetch("http://localhost:3200/api/theme-quizz/systeme-sco", {

			method: "GET",			
			
			

			headers: {
				"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			}

		
		})


		.then(res => {
			if (res.status === 200) {
				res.json().then(res => {
					this.state.questions = res.question;
					this.setState({question: res})
					console.log(this.state.questions)
					
							
				})

			

			}

			else {

				console.log("Question non get fréro")
			
			}
		})

		.catch(errors =>{
			console.log(errors);
		})
			

				
	}

	nextQuestion = () =>{
		//const div = document.getElementsByClassName("question")[0].getAttribute("id");
		//e.preventDefault();
		const index = this.state.index;
		
		//console.log(div)


		if (index < 2) {
		this.setState({index: this.state.index + 1})
			console.log(index)
		}

			else  {
		this.setState({index: 0})
			console.log(index)
		} 
	}

	render() {


		
				const {questions} = this.state;		
									
					const questionFilter = questions.filter((question) => {

					return question.categorie === "systeme-sco"			

				})

					const mapQuestion = questionFilter.map((question) => (
						

					<div className="question" key={question._id} id= {question._id}>
					  <p className="quizzQuestion">{question.libelle}</p>
					  	
					 
					 
					 </div>
					 
				)); 

					

    				const returnQuizz = (

							<div className="test">
							  {mapQuestion[this.state.index]}
								  <form className="conteneurBack" onSubmit={this.handleClick}>
									<input type="text" name="reponse" placeholder="réponse" 
									onChange={this.handleChange} className="title"/><br />
									<button className="buttonSignup">NEXT</button>
								</form> 
							</div> 
											 
					); 

					
					console.log(questionFilter)

					const result = (<h2>Bien ouéj ! </h2>)

		return(
			<div className="conteneurQuizzSystemeSco">
				
						  {returnQuizz}
						  {this.state.goodAnswers == 3 ? result : null}
						  	
						 
						 
				 
			</div>

		);

	}

}

export default QuizzSystemeSco;