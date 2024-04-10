import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Sidebar, Header } from "../includes/index";
import { useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components/index";
import { useLoaderStore } from "../services/store/store";
import style from "./page.module.scss";
const Videoplayer = () => {
  const { id } = useParams();
  const { status, startLoading, stopLoading } = useLoaderStore(
    (store) => store
  );
  const { data: video, loading } = useFetch(`video/details?video_id=${id}`);
  let url = `https://www.youtube.com/watch?v=${id}`;
  const viewsInk = (k) => {
    const divid = k / 10000;

    return Math.ceil(divid);
  };
  console.log(video);
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [loading]);
  return (
    <>
      <Sidebar />
      <Container fluid className={style.wrapper}>
        <Header />
        <Row>
          <Col xs={8}>
            <div className={style.player}>
              <ReactPlayer
                url={url}
                controls={true}
                playing={true}
                muted={false}
                light={true}
                playIcon={<FaCirclePlay color="red" fontSize="2.5rem" />}
                pip={true}
              />
            </div>
            <p className={style.video__title}>{video?.title}</p>
            <p className={style.video__author}>{video?.author}</p>
            <pre className={style.video__views}>
              {viewsInk(video?.number_of_views)}K views .{" "}
              {video?.published_time}
            </pre>
            <p className={(style.video__subtitle, "text-truncate")}>
              {video?.description}
            </p>
          </Col>
          <Col xs={4}>recomended list</Col>
        </Row>
      </Container>
      <Loading status={status} />
    </>
  );
};

export default Videoplayer;
