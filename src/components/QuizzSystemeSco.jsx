import React from "react";
import "../index.css";
import GenerateQuiz from "generate-quiz";


class QuizzSystemeSco extends React.Component {

state={

		index: 0,
		affiché: true,			
		questions: [],
		reponse: "",
		goodAnswers: false,
		falseAnswers: false,
		countGoodAnswers: 0,
		countQuestions: 0,
		numberQuestion: 1,
		gradeAppears: null
	}

	componentDidMount = () => {
		this.questionGet()
	}


	componentDidUpdate = () => {

		if (this.state.goodAnswers === true){

			setTimeout(()=> {
			this.setState({goodAnswers: false})

								}, 3000)

		}

		else if (this.state.falseAnswers === true){

			setTimeout(()=> {
			this.setState({falseAnswers: false})

								}, 3000)

		}

		if(this.state.countQuestions === 3 && this.state.countGoodAnswers === 1){
			if(this.state.gradeAppears == null )

				this.setState({gradeAppears: <img src="./images/Samurai.jpg" className ="samuraï" />})
		}
		
	}

	/*grade = () => {
		if(this.state.countQuestions === 2 & this.state.countGoodAnswers === 1){
			console.log("One")
			return <img src="./images/Samuraï.jpg" className ="samuraï" />
			console.log("two")
		}

	}*/

	handleClick = (e) =>  {
		
		e.preventDefault();
		
		//console.log(this.state);

		const {reponse} = this.state;
		this.questionPost(reponse);
		this.nextQuestion()
		this.setState({reponse: ""})
		this.ActualQuestionNumber()

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
					//this.state.goodAnswers = res.;
					

					if(res == true){
						this.setState({countGoodAnswers: this.state.countGoodAnswers + 1})
						this.setState({goodAnswers: true})
					}

					else {
						this.setState({falseAnswers: true})
						
					}
					
				})
			
			}

			else {

				console.log("Réponse non postée")
				//this.setState({reponse: ""})			
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
		const countQuestions = this.state.countQuestions
		
		//console.log(div)
		if (countQuestions !== 3){
		this.setState({countQuestions: this.state.countQuestions + 1})
		}

		if (index < 2) {
		this.setState({index: this.state.index + 1})
			//console.log(index)
		}

			/*else  {
		this.setState({index: 0})
			
		} */
	}

	ActualQuestionNumber =() =>{

		const actualNumber = this.state.numberQuestion;

		if (actualNumber < 3) {
		this.setState({numberQuestion: this.state.numberQuestion + 1})
			//console.log(index)
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
							<h2>{this.state.numberQuestion}</h2>
							  {mapQuestion[this.state.index]}
								  <form className="conteneurBack" onSubmit={this.handleClick}>
									<input type="text" name="reponse" value ={this.state.reponse} 
									onChange={this.handleChange} className="title"/><br />
									<button className="buttonSignup">NEXT</button>
								</form> 
							</div> 
											 
					); 

					
					


					const result = (<div className="goodAnswers"><h2>Bonne réponse !</h2></div>)
					const badResult = (<div className="falseAnswers"><h2>Mauvaise réponse !</h2></div>)
					console.log(this.state.countQuestions, "countQuestions")
					console.log(this.state.countGoodAnswers, "CountGoodAnswers")
					
				
		return(
			<div className="conteneurQuizzSystemeSco">
							
						  {returnQuizz}
						  {this.state.goodAnswers === true ? result : null}
						  {(this.state.falseAnswers === true) ? badResult : null}	
						  {this.state.gradeAppears !== null ? this.state.gradeAppears : null} 
						  							 
				 
			</div>

		);

	}

}

export default QuizzSystemeSco;