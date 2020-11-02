import React from 'react';
import '../index.css';
import Image from './Image';
import ImageResponsive from './ImageResponsive';
import ButtonSignup from './ButtonSignup';
import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';
import QuizzSystemeSco from './QuizzSystemeSco';
import { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import {proxy} from "../utilis"


import  {  withRouter} from 'react-router-dom'


class Home extends React.Component {
    state = {
            
            button: false,
            users: [],
            wrongPasswordOrId: false,
            success: false,
            alreadyExist: false,
            affichage: false,
            test: false,
            checkToken: ""   
    }


    componentDidMount(){
       this.setState({checkToken: "Offline"})
       this.userGet()
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

    
    quizzAccess =()=> {

      this.setState({notAccess: true})
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


    userGet = (admin, grade) => {
    

    fetch(proxy+"/api/button/admin", {

      method: "GET",      
      
      

      headers: {
        //"Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `bearer ${localStorage.getItem("jwt")}` 
      }

    
    })


    .then(res => {
      if (res.status === 200) {
        res.json().then(res => {
         // this.state.users = res.user;
         // this.setState({user: res})//this.setState({...this.state.articles});
          //console.log(this.state.users)
          this.setState({button: true})
          
              
        })
        

      }

      else {

        console.log("Que pour l'admin")
      
      }
    })

    .catch(errors =>{
      console.log(errors);
    })
      

        
  }


  buttonAdminState (){
    this.setState({button: false})
  }




 

    render() {

      

      console.log(this.state.button)
          const {users} = this.state;    
                  
          const userFilter = users.filter((user) => {

          return user.admin === true     

        })

         

        const map = userFilter.map((userFilter) => (

          

          <button style={{marginLeft: "6%", marginTop: "7px"}} key={userFilter._id}>
          
          </button>
          
           
        ));

        const buttonAdmin = (
         <Link style={{marginLeft: "6%", marginTop: "7px"}} to ="/baback">ADMIN</Link>)

       
       const message = (<div className ="msg"><p className="msgP">Il existe déjà un utilisateur 
       enregistré avec cette adresse e-mail !</p></div>)

       const successMessage = (<div className ="msgSuccess"><p className="msgPSuccess">Enregistré avec Succès ! Tu 
        peux maintenant te connecter !</p></div>)

       const passwordIdFailed = (<div className="wrongIdorPassword"><p className = "wrongIdorPasswordP">
        Identifiant(s) ou mot de passe incorrect(s) </p></div>)

      

       const cercleRouge = (<div className="cercleRouge"></div> )
       const cercleVert =  (<div className="cercleVert"></div> )
      
      

        return (
     <div className="homeConteneur">
    <h3 className = "statut" style={{marginLeft: "6%", display: "flex"}}>{this.props.connexion ? cercleVert : cercleRouge}
    {this.state.checkToken}</h3>

     {this.props.connexion ? null : <ButtonSignup emailExistant = {this.checkEmail.bind(this)} 
      successInscription = {this.successSignup.bind(this)} />}
	 
     
	 {this.props.connexion ? <ButtonLogout changeMonState ={this.props.changeMonState} removeButton={this.buttonAdminState.bind(this)} /> : 
      <ButtonLogin change ={this.props.changeMonState} mistakeIdOrPassword={this.echecPasswordOrId.bind(this)} admin ={this.userGet}/>}

      {this.state.alreadyExist ? message : null}
      {this.state.success ? successMessage : null}
      {this.state.wrongPasswordOrId ? passwordIdFailed : null}   
       {this.state.button ? buttonAdmin : null} 
       
	     <Image />
       <ImageResponsive />
     
     
       
     	 
     	   

	 </div>			
        );
    }
}

export default withRouter(Home);
