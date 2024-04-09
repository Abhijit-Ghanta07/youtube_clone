import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleVideo = ({ video }) => {
  const viewsInk = (k) => {
    const divid = k / 10000;

    return Math.ceil(divid);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <img src={video?.thumbnails[0]?.url} />
              <Link to={`/video/play/${video?.video_id}`}>Play</Link>
            </CardHeader>

            <CardBody>
              <p>{video?.title}</p>
              <p className="text-truncate">{video?.description}</p>
              <p>{video?.author}</p>
              <pre>
                {viewsInk(video?.number_of_views)}K views .{" "}
                {video?.published_time}
              </pre>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleVideo;
