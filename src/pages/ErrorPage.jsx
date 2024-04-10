import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// style
import style from "./page.module.scss";
const ErrorPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={style.errorCard__wrapper}>
            <Card className={style.errorCard}>
              <CardBody className={style.errorCard__body}>
                <h3>404</h3>
                <p>Page Not Found</p>
                <Button variant="primary">
                  <Link to={"/"}>Go Back</Link>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
