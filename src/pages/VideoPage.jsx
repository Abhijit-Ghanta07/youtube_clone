import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import SingleVideo from "../components/singleVideo/SingleVideo";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`/video/details?video_id=${id}`);
  return (
    <Container>
      <Row>
        <Col>{data && <SingleVideo video={data} />}</Col>
      </Row>
    </Container>
  );
};

export default VideoPage;
