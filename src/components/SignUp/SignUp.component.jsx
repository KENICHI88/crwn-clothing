import React, {Component} from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.components';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './SignUp.style.scss';


class SignUp extends Component {
  constructor(){
    super();
    
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    
    if(password !== confirmPassword) {
      alert('password dont\' match');
      return;
    }
    
    try {
      const { user }  = await auth.createUserWithEmailAndPassword(email, password);
      
      await createUserProfileDocument(user, {displayName});
      
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.error(error);
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a acccount</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>
          
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInput>
          
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          ></FormInput>
          
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='confirm Password'
            required
          ></FormInput>
          
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
