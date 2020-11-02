import React from "react";
import "../index.css";
import {proxy} from "../utilis"



class QuizzTechnologie extends React.Component {

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
		gradeAppears: null,
		correctAnswer: "",
		notAccess: false,
	}

	componentDidMount = () => {
		this.questionGet()
	}

	restartQuizz = () => {

		//document.location.reload(true);
		window.location.reload()
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

		}if(this.state.countQuestions === 8 && this.state.countGoodAnswers <= 1){
			if(this.state.gradeAppears == null )

			/*setTimeout(() => {this.setState({gradeAppears: <img src="./images/Samurai4.jpg" className ="samurai" />})

			 }, 3000)*/

			
			setTimeout(() => {this.setState({gradeAppears: 
			<div style={{position: "relative", height:"auto"}}>
   				<div style={{position: "absolute", zIndex:"1", height: "auto", width: "100%"}}>	
					<img src="./images/samouraiVaincu.jpg" style={{width: "100%"}}/>
				</div>
				
			   <div style={{position: "absolute", width: "100%", height:"auto", zIndex:"2", fontSize: "2rem", color: "aliceblue"}}>
			      <center><b>GRADE: Guerrier Vaincu !<br /> {this.state.countGoodAnswers} bonne réponse</b>
			      <br />
			      	   <p>
			     		 Les défaites d'aujourd'hui construisent les victoires de demain !
			     		 <br />

			           </p>
			           <button onClick={this.restartQuizz}>RESTART</button>
			      </center>
			    </div>
			</div>     	
			}) 
			}, 3000)
		}

		if(this.state.countQuestions === 8 && this.state.countGoodAnswers >= 2 && this.state.countGoodAnswers < 5){
			if(this.state.gradeAppears == null )

			/*setTimeout(() => {this.setState({gradeAppears: <img src="./images/Samurai4.jpg" className ="samurai" />})

			 }, 3000)*/

			
			setTimeout(() => {this.setState({gradeAppears: 
			<div style={{position: "relative", height:"auto"}}>
   				<div style={{position: "absolute", zIndex:"1", height: "auto", width: "100%"}}>	
					<img src="./images/Samurai4.jpg" style={{width: "100%"}}/>
				</div>
				
			   <div style={{position: "absolute", width: "100%", height:"auto", zIndex:"2", fontSize: "2rem", color: "aliceblue"}}>
			      <center><b>GRADE: Samouraï !<br /> {this.state.countGoodAnswers} bonnes réponses</b>
			      <br />
			      	   <p>
			     		 La sagesse mets du temps à être acquise mais tu es sur la bonne voie !
			     		 <br />

			           </p>
			           <button onClick={this.restartQuizz}>RESTART</button>
			      </center>
			    </div>
			</div>     	
			}) 
			}, 3000)
		}

		

		

		else if(this.state.countQuestions === 8 && this.state.countGoodAnswers >=5 && this.state.countGoodAnswers < 7){
			if(this.state.gradeAppears == null )

			
			setTimeout(() => {this.setState({gradeAppears: 
			<div style={{position: "relative", height:"auto"}}>
   				<div style={{position: "absolute", zIndex:"1", height: "auto", width: "100%"}}>	
					<img src="./images/shogun.jpg" style={{width: "100%"}}/>
				</div>
				
			   <div style={{position: "absolute", width: "100%", height:"auto", zIndex:"2", fontSize: "2rem", color: "whitesmoke"}}>
			      <center><b>GRADE: Shogun !<br /> {this.state.countGoodAnswers} bonnes réponses</b>
			      <br />
			      	   <p>
			     		 Tu as l'âme d'un leader !
			     		 <br />

			           </p>
			           <button onClick={this.restartQuizz}>RESTART</button>
			      </center>
			    </div>
			</div>     	
			}) 
			}, 3000)
		}

		else if(this.state.countQuestions === 8 && this.state.countGoodAnswers >= 6){
			if(this.state.gradeAppears == null )

			
			setTimeout(() => {this.setState({gradeAppears: 
			<div style={{position: "relative", height:"auto"}}>
   				<div style={{position: "absolute", zIndex:"1", height: "auto", width: "100%"}}>	
					<img src="./images/legend.jpg" style={{width: "100%"}}/>
				</div>
				
			   <div style={{position: "absolute", width: "100%", height:"auto", zIndex:"2", fontSize: "2rem", color: "whitesmoke"}}>
			      <center><b>GRADE: Soldat de Légende !<br /> {this.state.countGoodAnswers} bonnes réponses</b>
			      <br />
			      	   <p>
			     		 Véritable connaisseur !
			     		 <br />

			           </p>
			           <button onClick={this.restartQuizz}>RESTART</button>
			      </center>
			    </div>
			</div>     	
			}) 
			}, 3000)
		}

		if(this.state.gradeAppears !== null){
			const div = document.getElementById("conteneurQuizzSystemeSco");
			div.style.display="none"
		}
		
	}

	/*grade = () => {
		if(this.state.countQuestions === 2 & this.state.countGoodAnswers === 1){
			console.log("One")
			return <img src="./images/Samuraï.jpg" className ="samuraï" />
			console.log("two")
		}

	}*/

	/*restartQuizz = () => {

		//document.location.reload(true);
		window.location.reload()
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
		fetch(proxy + "/api/quizz/technologie/" + id, {

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
					//this.setState({correctAnswer: res.Answer1})
					

					if(res == true){
						this.setState({countGoodAnswers: this.state.countGoodAnswers + 1})
						this.setState({goodAnswers: true})
					}

					else {
						this.setState({falseAnswers: true})
						this.setState({correctAnswer: res})
						console.log(res, "229")
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
		

		fetch(proxy + "/api/theme-quizz/technologie", {

			method: "GET",			
			
			

			headers: {
				"Content-Type": "application/json",
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": `bearer ${localStorage.getItem("jwt")}`
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

			else if (res.status === 401) {

				console.log("Question non get fréro")
				
				this.setState({notAccess: true})
				this.redirection()
				

			}
		})

		.catch(errors =>{
			console.log(errors);
		})
			

				
	}

	redirection = () => {
		setTimeout(()=> {
			this.props.history.push("/")

								}, 2000)
	}

	nextQuestion = () =>{
		//const div = document.getElementsByClassName("question")[0].getAttribute("id");
		//e.preventDefault();
		const index = this.state.index;
		const countQuestions = this.state.countQuestions
		
		//console.log(div)
		if (countQuestions !== 8){
		this.setState({countQuestions: this.state.countQuestions + 1})
		}

		if (index < 7) {
		this.setState({index: this.state.index + 1})
			//console.log(index)
		}

			/*else  {
		this.setState({index: 0})
			
		} */
	}

	ActualQuestionNumber =() =>{

		const actualNumber = this.state.numberQuestion;

		if (actualNumber < 8) {
		setTimeout(()=> {	
			this.setState({numberQuestion: this.state.numberQuestion + 1})
				//console.log(index)
			
			}, 3000)	
		}
	}

	render() {

			const quizz = (<div className="notAccess"><p className = "notAccessP">
        Connecte-toi pour te tester ! </p></div>)
		
				const {questions} = this.state;		
									
					const questionFilter = questions.filter((question) => {

					return question.categorie === "technologie"			

				})

					const mapQuestion = questionFilter.map((question) => (
						

					<div className="question" key={question._id} id= {question._id}>
					  <p className="quizzQuestion">{question.libelle}</p>
					  	
					 
					 
					 </div>
					 
				)); 

					const badResult = (<div className="falseAnswers"><h2>Faux ! La bonne réponse est :"{this.state.correctAnswer}"</h2></div>)

					const result = (<div className="goodAnswers"><h2>Bonne réponse !</h2></div>)

    				const returnQuizz = (

							<div className="test">
							{this.state.goodAnswers === true ? result : null}
							{(this.state.falseAnswers === true) ? badResult : null}
							<p className="numberQuestion">{this.state.numberQuestion}</p>
							  {mapQuestion[this.state.index]}
								  <form className="conteneurBack" onSubmit={this.handleClick}>
									<input type="text" name="reponse" value ={this.state.reponse} 
									onChange={this.handleChange} className="title" required /><br />
									<button className="buttonNext">NEXT</button>
								</form> 
							</div> 
											 
					); 

					
					


					
					
					console.log(this.state.countQuestions, "countQuestions")
					console.log(this.state.countGoodAnswers, "CountGoodAnswers")
					
				
		return(


		<div className="bigConteneur">
		{this.state.notAccess ? quizz : null}	
		 {this.state.gradeAppears !== null ? this.state.gradeAppears : null}
			<div className="conteneurQuizzSystemeSco" id="conteneurQuizzSystemeSco">
				
						  {returnQuizz}		  
					<p></p>	  					   
						  							 
				 
			</div>

		</div>	

		);

	}

}

export default QuizzTechnologie;