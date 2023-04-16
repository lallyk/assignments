import React from 'react';
import './App.css';
import SignUp from './SignUp';
import LoginForm from './LoginForm';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
  
function App() {
  const isloggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return(
    <div>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/welcome">
        {!isloggedIn && <Redirect to="/login" />}
        {isloggedIn && <Welcome />}</Route>
        
      </Switch>
  
    </div>
    
  )
   
}

export default App;
