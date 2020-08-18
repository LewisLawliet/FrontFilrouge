import React from "react";
import "../index.css";
import GenerateQuiz from "generate-quiz";


class QuizzSystemeSco extends React.Component {

state={

		affiché: true,			
		questions: []

	}

	componentDidMount(){
		this.questionGet()
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

	render() {

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
		          question: mapQuestion,
		          answers: [`4`,`2`,`1`],
		          correctAnswer: 0 // index of the correct answer in the answers array
		         },
		         {
		          question: "Is JavaScript cool?",
		          answers: [`yes`,`no`,`of course`,`yes, it is`,`yep`,`definitely`],
		          correctAnswers: [0,2,3,4] // multiple correct answers, make sure to differentiate between correctAnswer and correctAnswers
		         },
    ];

		return(
			<div className="conteneurQuizzSystemeSco">
				{mapQuestion}
			</div>

		);

	}

}

export default QuizzSystemeSco;