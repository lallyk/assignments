import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://frontendtestapi.staging.fastjobs.io/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        history.push("/table");
      } else {
        alert("Please check your username and password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.con}> Congratulations</div>
      <div className={classes.text}><div>Company XYZ inviting </div>
      <div>you to take an interview</div></div>
      <div className={classes.skill}> Skills being assessed</div>
      <div className={classes.all}>
        <span className={classes.first}> UI/UX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={classes.first}> Product Design &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={classes.first}> Motion Graphics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div className={classes.con}>Don't be nervous</div>
      <div className={classes.half}>
      <h1 className={classes.text}>For Us Stay In Touch</h1>
    <form onSubmit={handleLogin}>
    <div className={classes.login}>
      <label>
        Username:&nbsp;&nbsp;
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label></div>
      <label>
        Password:&nbsp;&nbsp;
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form></div></div>
  );
};

export default LoginPage;