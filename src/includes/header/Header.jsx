import React, { useEffect, useState } from "react";
import useUserStore from "../../context/zustand";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
// styles
import style from "./header.module.scss";
const Header = () => {
  const { name, loading, getData, userInfo, getUserFromLocal, DeleteUser } =
    useUserStore();
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
    <Container fluid>
      <Row className="header-wrapper">
        <Col className={`links`}>
          <Link to="/">home</Link>
          <Link to="/explore"> other page</Link>
        </Col>
        <Col className="header-search">
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
        </Col>
        <Col>
          <button
            className="mode"
            onClick={(e) => {
              e.stopPropagation();
              // setmode((e) => (e === "darkmode" ? "lightmode" : "darkmode"));
            }}
          >
            mode
          </button>
        </Col>

        <Col>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
