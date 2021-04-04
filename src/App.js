import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import SignInSignUpPage from './pages/signInSignUp/SignInSignUp.component';

import Header from './components/Header/Header.component';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser : null
    }
  }
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
    })
  }
  
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
