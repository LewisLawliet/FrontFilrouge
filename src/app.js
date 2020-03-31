import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
    render() {
        return (
            <Router>
         <div>   
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />

               
                </Switch>
                <Footer />
             </div>
             

            </Router>
        );
    }
}

export default App;
