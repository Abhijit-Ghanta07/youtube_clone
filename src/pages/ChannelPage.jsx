import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLoaderStore } from "../services/store/store";
import { Loading, VideoList } from "../components/index";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { fetchChannel, fetchChannelVideos } from "../services/queries/query";

// styles

import style from "./page.module.scss";

const ChannelPage = () => {
  const { id } = useParams();
  const { isSuccess, data, isPending } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchChannel(id),
  });
  const { data: recomend } = useQuery({
    queryKey: ["recomend", { id }],
    queryFn: () => fetchChannelVideos(id),
    enabled: isSuccess,
  });
  const { status, startLoading, stopLoading } = useLoaderStore(
    (store) => store
  );

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (isPending) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isPending]);

  useEffect(() => {
    setVideos(recomend?.videos);
  }, [recomend]);

  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <button className={style.btn}>
            <Link to={"/"}>Go Back</Link>
          </button>
          <Col>
            <img
              src={data?.banner[0]?.url}
              className={style.banner__img}
              alt="banner"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack className={style.channel__details}>
              <img
                src={data?.avatar[0]?.url}
                alt="avatar"
                className={style.channel__avatar}
              />
              <h3 className={style.channel__title}>{data?.title}</h3>
              <p className={style.subs}>{data?.subscriber_count}</p>
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center"
              >
                <p>Country:{data?.country}</p>
                <p>Created Date:{data?.creation_date}</p>
              </Stack>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            {videos ? (
              <VideoList videos={videos} title="Channel Videos" />
            ) : null}
          </Col>
        </Row>
      </Container>
      <Loading status={status} />
    </>
  );
};

export default ChannelPage;
