import React, { useEffect, useState } from "react";
import { useStore } from "../../context/zustand";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import "./header.css";
const Header = ({ setmode }) => {
  const { name, loading, getData, userInfo, getUserFromLocal, DeleteUser } =
    useStore();
  const [inputData, setInputData] = useState("");
  function handleClick(params) {
    if (inputData !== "") {
      return getData(`search/?q=${inputData}`);
    }
    console.log("enter correct data");
  }
  useEffect(() => {
    getUserFromLocal();
  }, []);
  return (
    <div className="header-container">
      <div
        className="loading"
        style={loading ? { display: "block" } : { display: "none" }}
      ></div>
      <div className="header-wrapper">
        <div className={`links`}>
          <Link to="/">home</Link>
          <Link to="/explore"> other page</Link>
        </div>
        <div className="header-search">
          <label htmlFor="">
            <input
              type="text"
              placeholder="enter to search"
              onInput={(e) => {
                setInputData(e.target.value);
              }}
              onKeyDown={(e) => {
                e.key === "Enter" && handleClick();
              }}
              value={inputData}
            />
            <BsSearch onClick={handleClick} />
          </label>
        </div>
        <button
          className="mode"
          onClick={(e) => {
            e.stopPropagation();
            // setmode((e) => (e === "darkmode" ? "lightmode" : "darkmode"));
          }}
        >
          mode
        </button>
        {userInfo.length === 0 ? (
          <>
            <div className={`login-links`}>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
            </div>
          </>
        ) : (
          <div className="user">
            <div
              className="logo"
              onClick={() => {
                DeleteUser();
              }}
            >
              <BiUserCircle />
            </div>
            <p>{userInfo?.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
