import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDataStore } from "../../services/store/store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import catagories from "../../constants/Constant";
import cl from "classnames";
// styles
import style from "./header.module.scss";

import { ThemeContext } from "../../services/providers/ThemeProvider";
const Header = () => {
  const { mode, setMode } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const setSearch = useDataStore((store) => store.setAsyncData);
  const [inputData, setInputData] = useState("");
  const handleClick = async () => {
    navigate(`/search/${inputData}`);
    setInputData("");
  };
  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-bs-theme");
    }
  }, [mode]);
  return (
    <Container fluid className={cl(style.header__con, "bg-dark")}>
      <Row className="gap-2">
        <Col xs>
          <img
            src="/images/logo.png"
            alt="logo"
            className={style.header__logo}
          />
        </Col>
        <Col xs className="text-end">
          <button
            className={style.mode}
            onClick={(e) => {
              e.stopPropagation();
              setMode(!mode);
            }}
          >
            <img src="/icons/sun.svg" alt="sun" />
          </button>
        </Col>

        <Col xs className="text-end">
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
            <BsSearch onClick={handleClick} style={{ cursor: "pointer" }} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col className="overflow-y-auto">
          <Stack className={style.link__wrapper}>
            <Link
              className={
                pathname == "/" ? style.link__tab__active : style.link__tab
              }
              to={"/"}
            >
              Home
            </Link>
            {catagories.map((cata) => {
              return (
                <Link
                  to={`category/${cata.path}`}
                  key={cata.id}
                  className={
                    cata.path == pathname.split("/")[2]
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
