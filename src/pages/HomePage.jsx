import React from "react";

import GetData from "../data/GetData";
import { Col, Container, Row } from "react-bootstrap";
import useDataStore from "../context/DataContext";

const HomePage = () => {
  const data = useDataStore((store) => store.DATA);

  return (
    <>
      <Container fluid="xl">
        <Row>
          <Col>This is home page</Col>
        </Row>
      </Container>
      <GetData />
    </>
  );
};

export default HomePage;
