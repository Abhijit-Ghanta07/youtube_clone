import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../includes/index";
import { Loading } from "../components/index.js";
import { useLoaderStore } from "../services/store/store";
import GetData from "../data/GetData.jsx";
// style
import style from "./page.module.scss";

const HomePage = () => {
  const status = useLoaderStore((store) => store.status);
  return (
    <>
      <Container fluid className="p-0">
        <Sidebar />
        <Container className={style.wrapper} fluid>
          <Header />
          <Outlet />
        </Container>
      </Container>
      <Loading status={status} />
      <GetData />
    </>
  );
};

export default HomePage;
