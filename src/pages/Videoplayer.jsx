import React from "react";
import { Container } from "react-bootstrap";

import { Sidebar, Header } from "../includes/index";
import { Player } from "../components/index";
import { useParams } from "react-router-dom";
import style from "./page.module.scss";
const Videoplayer = () => {
  const { id } = useParams();
  return (
    <>
      <Sidebar />
      <Container fluid className={style.wrapper}>
        <Header />
        <Player id={id} />
      </Container>
    </>
  );
};

export default Videoplayer;
