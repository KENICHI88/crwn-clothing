import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import SignInSignUpPage from './pages/signInSignUp/SignInSignUp.component';

import Header from './components/Header/Header.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
      })
      setCurrentUser(userAuth);
    }
    });
  }
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {
    console.log(this.props.currentUser);
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" render={() => {
            return this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage/>)
          }} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
