import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/signin-signup/signin and signup.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
     <Route exact path ='/' component ={HomePage} />
     <Route exact path ='/shop' component ={ShopPage} />
     <Route exact path ='/register' component ={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
}

export default App;
