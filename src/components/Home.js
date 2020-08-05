import React from 'react';
import '../index.css';
import Image from './Image';
import ButtonSignup from './ButtonSignup';
import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';
import { PropTypes } from 'react';


import  {  withRouter} from 'react-router-dom'


class Home extends React.Component {
    state = {

            wrongPasswordOrId: false,
            success: false,
            alreadyExist: false,
            affichage: false,
            test: false,
            checkToken: ""   
    }


    componentDidMount(){
       this.setState({checkToken: "Offline"})

    }

    

    componentDidUpdate(prevProps, prevState) {

        
        const stepToken = this.state.checkToken;
        const affichage = this.state.affichage;
        const connex = this.props.connexion;
        //const bob = localStorage.getItem("jwt");
        //const remove = localStorage.removeItem("jwt");
        const sto = localStorage.getItem("jwt") === null;
       //console.log(connex)
       const connexionFalse = this.props.connexion === false;
       const connexionTrue = this.props.connexion === true;
        //console.log(connexionTrue)
       //this.checkLocalStorage()
        if (stepToken !== prevState.stepToken){
                    if(connex === true && stepToken !== "Online"){

                        console.log(stepToken)
                        this.setState({checkToken: "Online"})
                        console.log(stepToken)


                        
                    }

                    else if (connex === false && stepToken !== "Offline"){
                        console.log("elfe if")
                        this.setState({checkToken: "Offline"})
                        

                    }

                                
             }

        if(this.state.alreadyExist === true){

             setTimeout(()=> {
                        this.setState({alreadyExist: false})        
                                             
                                            }, 4000)
        } 


        if(this.state.success === true){

             setTimeout(()=> {
                        this.setState({success: false})        
                                             
                                            }, 4000)
        }  
             


         if(this.state.wrongPasswordOrId === true){

             setTimeout(()=> {
                        this.setState({wrongPasswordOrId: false})        
                                             
                                            }, 3000)
        }     
    }

    checkLocalStorage () {
        const token = localStorage.getItem("jwt")
        console.log(token)
        if(token) {
           this.props.connexion(true)
        }
        else {
           this.props.connexion(false)
        }
    }



  
    checkEmail(){
       //if(localStorage.getItem("test")){
        this.setState({alreadyExist: true})
      // }
    }


    successSignup(){
       //if(localStorage.getItem("test")){
        this.setState({success: true})
      // }
    }

    echecPasswordOrId() {

        this.setState({wrongPasswordOrId: true})
    }

    render() {
       
       const message = (<div className ="msg"><p className="msgP">Il existe déjà un utilisateur 
       enregistré avec cette adresse e-mail !</p></div>)

       const successMessage = (<div className ="msgSuccess"><p className="msgPSuccess">Enregistré avec Succès ! Tu 
        peux maintenant te connecter !</p></div>)

       const passwordIdFailed = (<div className="wrongIdorPassword"><p className = "wrongIdorPasswordP">
        Identifiant(s) ou mot de passe incorrect(s) </p></div>)

       const cercleRouge = (<div className="cercleRouge"></div> )
       const cercleVert =  (<div className="cercleVert"></div> )
       //const intermm =  
      // console.log(success)



        return (
     <div className="homeConteneur">
    <h3 style={{marginLeft: "6%", display: "flex"}}>{this.props.connexion ? cercleVert : cercleRouge}
    {this.state.checkToken}</h3>

     {this.props.connexion ? null : <ButtonSignup emailExistant = {this.checkEmail.bind(this)} 
      successInscription = {this.successSignup.bind(this)} />}
	 
     
	 {this.props.connexion ? <ButtonLogout changeMonState ={this.props.changeMonState} /> : 
      <ButtonLogin change ={this.props.changeMonState} mistakeIdOrPassword={this.echecPasswordOrId.bind(this)} />}

      {this.state.alreadyExist ? message : null}
      {this.state.success ? successMessage : null}
      {this.state.wrongPasswordOrId ? passwordIdFailed : null}   
        
	 
     
     <Image />	
       
     	 
     	   

	 </div>			
        );
    }
}

export default withRouter(Home);
