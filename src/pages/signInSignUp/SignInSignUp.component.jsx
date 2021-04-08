import React from 'react';
import './SignInSignUp.style.scss';

import SignIn from '../../components/SignIn/SignIn.component';

import SignUp from '../../components/SignUp/SignUp.component';

function SignInSignUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUpPage;
