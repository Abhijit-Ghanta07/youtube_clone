import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLoaderStore } from "../services/store/store";
import { Loading, VideoList } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import { Header, Sidebar } from "../includes/index";
import style from "./page.module.scss";
const SearchPage = () => {
  const { query } = useParams();
  const { status, startLoading, stopLoading } = useLoaderStore(
    (store) => store
  );
  const { data, loading } = useFetch(`search/?query=${query}`);
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
          <Col>
            <VideoList
              videos={data?.videos}
              title={`founded videos for ${query}`}
            />
          </Col>
        </Row>
      </Container>
      <Loading status={status} />
    </>
  );
};

export default SearchPage;
