import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem("value") || []);
  // const [flag, setFlag] = useState(false);

  function handleFormSubmit() {
    if (!name || !email || !password || !phone || !category) {
      // setFlag(true);
      setShow(true);
      // console.log("akshj");
      toast.error("Wow so easy!");
    } else {
      let index = user.findIndex((val) => val.email === email);
      console.log({ index });
      if (index < 0) {
        setUser((pre) => [...pre, { name, email, password, phone, category }]);
        // setFlag(false);
        setShow(false);
        console.log("abcd");
        const details = { name, email, password, phone, category };
        localStorage.setItem("details", JSON.stringify(details));

        console.log("Saved in Local Storage");

        // setLogin(!login);
      }
    }
  }

  function handleClick() {
    history.push("/login");
  }

  return (
    <>
      <div>
        <h3>Register User</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone No.</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Enter contact no"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div>
          <label>Category</label>
          <div className="radiobtn">
            <input
              type="radio"
              value="Admin"
              id="admin"
              name="gender"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="male">Admin</label>
            <input
              type="radio"
              value="Doctor"
              id="doctor"
              name="gender"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="male">Doctor</label>
            <input
              type="radio"
              value="User"
              id="user"
              name="gender"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="male">User</label>
          </div>
        </div>

        <button
          onClick={handleFormSubmit}
          className="btn btn-dark btn-lg btn-block"
        >
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered
          <a href="#" onClick={handleClick}>
            log in?
          </a>
        </p>
        <ToastContainer />

        {/* <Alert show={show} variant="error">
          <Alert.Heading>How's it going?!</Alert.Heading>
        </Alert> */}
      </div>
    </>
  );
};

export default Registration;
