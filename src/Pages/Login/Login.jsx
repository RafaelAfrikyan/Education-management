import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      This is Login page
      <Link to="/home">Home</Link>
      <button className="login-button"> Login / Sign up </button>
    </div>
  );
}
