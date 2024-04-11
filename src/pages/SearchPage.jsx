import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLoaderStore } from "../services/store/store";
import { Loading, VideoList } from "../components";
import { Container } from "react-bootstrap";

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
      <Container fluid>
        <VideoList
          videos={data?.videos}
          title={`founded videos for ${query}`}
        />
      </Container>
      <Loading status={status} />
    </>
  );
};

export default SearchPage;
