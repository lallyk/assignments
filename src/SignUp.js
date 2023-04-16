import React, { useRef} from "react";
import classes from "./SignUp.module.css";
   
    const SignUp = () => {
      const email = useRef();
      const password = useRef();
    
      const signupHandler = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2EJRPXcBuyD70QslhVimHxf3tO_QB3h8", {
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
            localStorage.setItem('isLoggedIn', 'true');
            console.log(data);
          } else {
            throw new Error(data.error.message);
          }
        } catch (err) {
          alert(err.message);
        }
      };
    
      return (
        <div >
          <form  className={classes.container} onSubmit={signupHandler}>
            <center>
              <div>
            <label htmlFor="email">Email</label></div>
            <input id="email" type="email" ref={email} />
            <div><label htmlFor="password">Password</label></div>
            <input id="password" type="password" ref={password} />
            <div>
              <button type="submit">
                SignUp
              </button>
            </div></center>
          </form>
        </div>
      );
    };
    
    export default SignUp;
    