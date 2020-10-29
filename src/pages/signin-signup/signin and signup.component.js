import React from 'react'
import './signin-and-signup.styles.scss'
import SignUp from '../../components/sign-up/sign-up.component'
import Signin from '../../components/sign-in/sign-in.component'

const SignInAndSignUpPage =() => (
    <div className = 'sign-in-and-sign-up'>
         <Signin/>
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;