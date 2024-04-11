import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { VideoList } from "../components/index";
import { useDataStore } from "../services/store/store";
const Home = () => {
  const videoData = useDataStore((store) => store.videoData);
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <VideoList
            videos={videoData}
            direction={"horizontal"}
            title="Featured Videos"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
