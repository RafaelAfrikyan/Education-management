import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usersDataBase } from "./../loginUsersData";
import "./Login.css";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredEmail.trim() === usersDataBase.user1.username &&
      enteredPassword === usersDataBase.user1.pass
    ) {
      setFormIsValid(() => (formIsValid = true));
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h1 style={{ color: "blue" }}>This is Login page</h1>
        <div>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="enter your e-mail"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            placeholder="enter your password"
          />
        </div>
        <Link to="/home">
          <input type="submit" value="Login" />
        </Link>
      </form>
    </div>
  );
}
