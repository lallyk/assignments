import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./MainPage.module.css";
import BorrowerInfo from './BorrowerInfo';
import { Route,  Switch } from "react-router-dom";


const MainPage = () => {
    const generateDots = (count) => {
        const dots = [];
        for (let i = 0; i < count; i++) {
          dots.push(<span key={i} className={classes.dot} />);
        }
        return dots;
      };
  return (
    <div className={classes.container}><center>
        <span className={classes.linknumbera}>1</span>{generateDots(13)}
        <span className={classes.linknumber}>2</span>{generateDots(9)}
        <span className={classes.linknumber}>3</span>{generateDots(11)}
        <span className={classes.linknumber}>4</span>{generateDots(11)}
        <span className={classes.linknumber}>5</span>
      <div>
      <NavLink to="/borrower-company" activeClassName={classes.active}>
          <span >Borrower Company Info</span>
      </NavLink> 
      <NavLink to="/director" className={classes.navlink}>
          Director Info
      </NavLink>
      <NavLink to="/financial" className={classes.navlink}>
        Financial Info
      </NavLink>
      <NavLink to="/past-performance" className={classes.navlink}>
        Past Performance Details
      </NavLink>
      <NavLink to="/document-upload" className={classes.navlink}>
       Document Upload
      </NavLink></div></center>
      <Switch>
          <Route path="/borrower-company" exact>
            <BorrowerInfo />
          </Route></Switch>
    </div>
  );
};

export default MainPage;