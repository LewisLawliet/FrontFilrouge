import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import MentionsLegales from './components/MentionsLegales';
import Apropos from './components/Apropos';
import SystemeSco from "./components/SystemeSco";
import MondePro from "./components/MondePro";
import Gastronomie from "./components/Gastronomie";
import Technologie from "./components/Technologie";
import Contact from "./components/Contact";
import QuizzSystemeSco from "./components/QuizzSystemeSco";
import BackAdmin from "./components/BackAdmin";
import ReactDom from 'react-dom';
import { PropTypes } from 'react';
import BackSystemeSco from "./components/BackSystemeSco";
import BackMondePro from "./components/BackMondePro";
import BackGastronomie from "./components/BackGastronomie";
import BackTechnologie from "./components/BackTechnologie";


class App extends React.Component {
    
constructor(props){
    super(props)
    this.state = {
        connecte: false,
        storage: false
        
    }
    
}


componentDidMount(){

    this.changeStateConnecte()
}



    changeStateConnecte = () => {

    const token = localStorage.getItem("jwt")
        //console.log(token)
        if(token) {
           this.setState({connecte: true})
        }
        else {
           this.setState({connecte: false})
        }
    }



    render() {
        
        return (
            <Router>
            
            <Header />
                 
                <Switch>
                   
                    {/*<Route exact path="/" render ={(props) =>  <Home {...props} connexion={this.state.connecte} />} />*/}
                     <Route exact path="/" render ={(props) =>  <Home {...props} connexion={this.state.connecte} 
                     changeMonState ={this.changeStateConnecte.bind(this)} />} />
                   
                    <Route path="/MentionsLegales" component={MentionsLegales} />
                    <Route path="/Apropos" component={Apropos} />
                    <Route path="/systeme-sco" component={SystemeSco} />
                    <Route path="/monde-pro" component={MondePro} />
                    <Route path="/gastronomie" component={Gastronomie} />
                    <Route path="/technologie" component={Technologie} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/quizz-systeme-sco" component={QuizzSystemeSco} />
                    <Route path="/baback" component={BackAdmin} />
                    <Route path="/backsystemesco" component={BackSystemeSco} />
                    <Route path="/backmondepro" component={BackMondePro} />
                    <Route path="/backgastronomie" component={BackGastronomie} />
                    <Route path="/backtechnologie" component={BackTechnologie} />
                </Switch>
                <Footer />
             
             

            </Router>
        );
    }

}

export default App;
