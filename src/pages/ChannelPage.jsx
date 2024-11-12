import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import fetchData from "../services/api/api";
import { useEffect } from "react";
import { useLoaderStore } from "../services/store/store";
import { Loading, VideoList } from "../components/index";
import { Col, Container, Row, Stack } from "react-bootstrap";

import style from "./page.module.scss";
import axiosInt from "../services/axios/axios";
import { useQuery } from "@tanstack/react-query";

const fetchChanel = async (id) => {
  let { data } = await axiosInt.get(`channel/details?channel_id=${id}`);
  return data;
};
const ChannelPage = () => {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchChanel(id),
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
    const abort = new AbortController();
    if (data) {
      setTimeout(() => {
        fetchData(`channel/videos?channel_id=${id}`, abort.signal)
          .then((res) => {
            setVideos(res?.videos);
          })
          .catch((err) => console.log(err));
      }, 2500);
    }
    return () => {
      abort.abort();
    };
  }, [id, data]);

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
            <VideoList videos={videos} title="Channel Videos" />
          </Col>
        </Row>
      </Container>
      <Loading status={status} />
    </>
  );
};

export default ChannelPage;
