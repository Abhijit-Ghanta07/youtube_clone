import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import SingleVideo from "../components/singleVideo/SingleVideo";
import { VideoList } from "../components/index";
import { Header, Sidebar } from "../includes/index";
import { useParams } from "react-router-dom";

import style from "./page.module.scss";
const VideoPage = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`video/details?video_id=${id}`);
  // const { data: recomended, loading: recomLoad } = useFetch(
  //   `video/recommendations?video_id=${id}`
  // );
  return (
    <>
      <Sidebar />

      <Container fluid className={style.videoPage__con}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={8}>{data && <SingleVideo video={data} />}</Col>
          <Col xs={4}>
            <Container fluid className="overflow-y-auto">
              {/* <VideoList Data={recomended?.videos} title="Recomended Videos" /> */}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoPage;
