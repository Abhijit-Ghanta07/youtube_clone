import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import useFetch from "../hooks/useFetch";
import { useLoaderStore } from "../services/store/store";
const Category = () => {
  const { category } = useParams();
  const stopLoading = useLoaderStore((store) => store.stopLoading);
  const startLoading = useLoaderStore((store) => store.startLoading);
  const { data, loading } = useFetch(`search/?query=${category}`);
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [loading]);
  return (
    <Container fluid>
      <VideoList Data={data?.videos} title={category} />
    </Container>
  );
};

export default Category;
