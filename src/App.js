import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import TablePage from "./TablePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/table">
            <TablePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;