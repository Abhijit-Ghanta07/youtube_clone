import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../includes/index";
// style
import style from "./page.module.scss";

const HomePage = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Sidebar />
        <Container className={style.wrapper} fluid>
          <Header />
          <Outlet />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
