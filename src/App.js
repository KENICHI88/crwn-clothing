import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import SignInSignUpPage from './pages/signInSignUp/SignInSignUp.component';

import Header from './components/Header/Header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser : null
    }
  }
  
  componentDidMount() {
    this.unSubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          })
        })
      }
      this.setState({
        currentUser : userAuth
      });
    })
  }
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
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
