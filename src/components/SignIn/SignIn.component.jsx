import React, { Component } from 'react';
import './SignIn.style.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.components';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(){
    super();
    
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
  }
  
  handleChange = event => {
    const {value, name} = event.target;
    
    this.setState({[name] : value});
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already had account</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput label="Email" name="email" type="email" value={this.state.email} required 
            onChange={this.handleChange}
          />
          <FormInput label="Pawword" name="password" type="password" value={this.state.password} required 
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit form">Submit form</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
