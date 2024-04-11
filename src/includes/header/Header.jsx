import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDataStore } from "../../services/store/store";
// styles
import style from "./header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import catagories from "../../constants/Constant";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const setSearch = useDataStore((store) => store.setAsyncData);
  const [inputData, setInputData] = useState("");
  const handleClick = async () => {
    navigate(`/search/${inputData}`);
    setInputData("");
  };
  return (
    <Container fluid className={style.header__con}>
      <Row>
        <Col>
          <Stack direction="horizontal" className="justify-content-end">
            <label htmlFor="" className={style.inputBox}>
              <input
                type="text"
                placeholder="Enter to search"
                className={style.input}
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
          </Stack>
        </Col>
        {/* <Col>
          <button
            className="mode"
            onClick={(e) => {
              e.stopPropagation();
              // setmode((e) => (e === "darkmode" ? "lightmode" : "darkmode"));
            }}
          >
            mode
          </button>
        </Col> */}

        {/* <Col>
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
        </Col> */}
      </Row>
      <Row>
        <Col className="overflow-y-auto">
          <Stack className={style.link__wrapper}>
            <Link className={style.link__tab__active} to={"/"}>
              Home
            </Link>
            {catagories.map((cata) => {
              return (
                <Link
                  to={`category/${cata.path}`}
                  className={
                    pathname == cata.title
                      ? style.link__tab__active
                      : style.link__tab
                  }
                >
                  {cata.title}
                </Link>
              );
            })}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
