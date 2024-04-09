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

import style from "./video.module.scss";

const SingleVideo = ({ video }) => {
  const viewsInk = (k) => {
    const divid = k / 10000;

    return Math.ceil(divid);
  };
  return (
    <Container fluid className={style.video__con}>
      <Row>
        <Col>
          <Card className={style.video__card}>
            <CardHeader className="position-relative">
              <img
                src={video?.thumbnails[0]?.url}
                className={style.video__card__img}
              />
              <Link
                to={`/video/play/${video?.video_id}`}
                className={style.video__play}
              >
                Play
              </Link>
            </CardHeader>

            <CardBody>
              <p className={style.video__title}>{video?.title}</p>
              <p className={style.video__author}>{video?.author}</p>
              <pre>
                {viewsInk(video?.number_of_views)}K views .{" "}
                {video?.published_time}
              </pre>
              <p className={(style.video__subtitle, "text-truncate")}>
                {video?.description}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleVideo;
