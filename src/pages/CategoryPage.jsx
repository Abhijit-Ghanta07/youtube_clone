import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import useFetch from "../hooks/useFetch";
import { useLoaderStore } from "../services/store/store";
const Category = () => {
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoaderStore((store) => store);
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
      <VideoList videos={data?.videos} title={category} />
    </Container>
  );
};

export default Category;
