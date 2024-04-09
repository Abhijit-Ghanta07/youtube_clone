import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import useFetch from "../hooks/useFetch";
const Category = () => {
  const { category } = useParams();
  const { data } = useFetch(`search/?query=${category}`);
  return (
    <Container fluid>
      <VideoList Data={data?.videos} title={category} />
    </Container>
  );
};

export default Category;
