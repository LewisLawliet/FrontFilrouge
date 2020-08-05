import React from 'react';
import '../index.css';
//import ButtonSignup from './ButtonSignup';
//import ButtonLogin from './ButtonLogin';
//import ButtonLogout from './ButtonLogout';




/*class AffichageLoginLogout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    var button;

    if (isLoggedIn) {
      button = <LogoutButton  onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h3>Welcome back!</h3>;
}

function GuestGreeting(props) {
  return <h3>Connecte-toi petit gaïdjin !</h3>;

}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}




export default AffichageLoginLogout; */

class AffichageLoginLogout extends React.Component {
	state = {
		formIsOpen: false,
		isLoggedIn: false
	}
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  } 

  openForm(){
  	this.setState({formIsOpen: true});
  }

  /*closeForm(){
  	this.setState({formIsOpen: false});
  } */

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    this.openForm();
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    var button;

    if (isLoggedIn) {
      button = <LogoutButton  onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    const formulaire = (
			<div>
			<form>
			   <p>
			       <label for="pseudo">Votre pseudo :</label>
			       <input type="text" placeholder="Ton pseudo"name="pseudo" id="pseudo" />
			       
			       
			       <label for="pass">Votre mot de passe :</label>
			       <input type="password" placeholder="Ton password" name="pass" id="pass" />
			       
			   </p>
			</form>
		</div>	
	);	

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {this.state.formIsOpen ? formulaire : null}
      </div>

      
    );
  }
}

function UserGreeting(props) {
  return <h3>Welcome back!</h3>;
}

function GuestGreeting(props) {
  return <h3>Connecte-toi petit gaïdjin !</h3>;
  
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
} 


 

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}




export default AffichageLoginLogout;