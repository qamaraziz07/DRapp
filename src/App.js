import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/DashBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Redirect from="/" to="/login" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
