import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// import DashBoard from "./DashBoard";
import AdminPanel from "./AdminPanel";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  function handleLogin() {
    console.log("login");
    let pass = JSON.parse(localStorage.getItem("details"));
    // let mail = JSON.parse(localStorage.getItem("Email"));
    console.log("in progress");

    console.log({ pass });

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
      // } else if (passwordlog !== pass || emaillog !== mail) {
      //   setFlag(true);
      //   console.log("rejected");
    } else {
      console.log("done");
      console.log({ isLogin });
      setIsLogin(!isLogin);
      history.push("/dashboard");
    }
  }

  return (
    <div>
      <>
        <h3>LogIn</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => {
              setEmaillog(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => {
              setPasswordlog(event.target.value);
            }}
          />
        </div>
        <button onClick={handleLogin} className="btn btn-dark btn-lg btn-block">
          Login
        </button>

        <Link to="/register">
          <button className="btn btn-light btn-lg btn-block">Register</button>
        </Link>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </>
    </div>
  );
};

export default Login;
