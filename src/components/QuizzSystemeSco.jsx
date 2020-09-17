import React from "react";
import "../index.css";
import GenerateQuiz from "generate-quiz";


class QuizzSystemeSco extends React.Component {

state={

		index: 0,
		affiché: true,			
		questions: []

	}

	componentDidMount(){
		//this.questionGet()
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
		const index = this.state.index;
		

		if (index < 3) {
		this.setState({index: this.state.index + 1})
			console.log(index)
		}

			else if (index >= 3) {
		//this.setState({index: 0})
			console.log(index)
		}
	}

	render() {

			//console.log(index.length)

				const {questions} = this.state;		
									
					const questionFilter = questions.filter((question) => {

					return question.categorie === "systeme-sco"			

				})

					const mapQuestion = questionFilter.map((questionFilter) => (

					<div className="question" key={questionFilter._id}>
					  <h1>{questionFilter.libelle}</h1>
					
					 
					 
					 </div>
					 
				)); 

		const quizz = [
		         
		         
		         {
		          id: 1,	
		          question: "Is JavaScript cool?",
		          answers: [`yes`,`no`,`of course`,`yes, it is`,`yep`,`definitely`],
		          correctAnswers: [0,2,3,4] // multiple correct answers, make sure to differentiate between correctAnswer and correctAnswers
		         },

		         {
		          id: 2,	
		          question: "Qui a mangé ?",
		          answers: [`yes`,`no`,`maybe`,`I don't know`,`yep`,`definitely`],
		          correctAnswers: [0,2,3,4] // multiple correct answers, make sure to differentiate between correctAnswer and correctAnswers
		         },

		         {
		          id: 3,	
		          question: "Depuis quand ?",
		          answers: [`yes`,`no`,`of course`,`yes, it is`,`yep`,`definitely`],
		          correctAnswers: [0,2,3,4] // multiple correct answers, make sure to differentiate between correctAnswer and correctAnswers
		         },
    ];

    				const returnQuizz = (

						
						  <h1>{quizz[this.state.index].question}</h1>			  
						 
						 						 
					); 

					
					console.log(quizz[0])

		return(
			<div className="conteneurQuizzSystemeSco">
				<div className="question">
						  {returnQuizz}
						  <button onClick = {this.nextQuestion}>NEXT</button>	
						 
						 
						 </div>
			</div>

		);

	}

}

export default QuizzSystemeSco;