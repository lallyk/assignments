import React, { useRef} from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginForm.module.css";
    
    const LoginForm = () => {
      const email = useRef();
      const password = useRef();
      const history=useHistory();
    
      const loginHandler = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2EJRPXcBuyD70QslhVimHxf3tO_QB3h8", {
            method: "POST",
            body: JSON.stringify({
              email: email.current.value,
              password: password.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
    
          if (res.ok) {
            console.log(data);
            localStorage.setItem('isLoggedIn', 'true');
            history.push('/welcome');

          } else {
            throw new Error(data.error.message);
          }
        } catch (err) {
          alert(err.message);
        }
      };
    
      return (
        <div >
          <form className={classes.container} onSubmit={loginHandler}>
            <center>
            <label htmlFor="email">Email</label>
            <div>
            <input id="email" type="email" ref={email} /></div>
            <label htmlFor="password">Password</label>
            <div><input id="password" type="password" ref={password} /></div>
            <div>
              <button type="submit">
                Login
              </button>
            </div></center>
          </form>
        </div>
      );
    };
    
    export default LoginForm;
    