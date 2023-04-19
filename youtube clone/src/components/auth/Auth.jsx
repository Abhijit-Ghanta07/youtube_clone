import React, { useState } from "react";
import "./auth.css";
import { useStore } from "../../context/zustand";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const { getUserInfo } = useStore();
  const [user, setUser] = useState({
    name: "",
    password: "",
    cpassword: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    getUserInfo(user);
    setUser({ name: "", password: "", cpassword: "" });
    navigate(-1);
  }
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="enter your password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cpassword"
            placeholder="re-enter your password"
            value={user.cpassword}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
