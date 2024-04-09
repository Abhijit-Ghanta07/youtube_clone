import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDataStore } from "../../services/store/store";
// styles
import style from "./header.module.scss";

const Header = () => {
  const setSearch = useDataStore((store) => store.setAsyncData);
  const [inputData, setInputData] = useState("");
  const handleClick = async () => {
    await setSearch(inputData);
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
    </Container>
  );
};

export default Header;
