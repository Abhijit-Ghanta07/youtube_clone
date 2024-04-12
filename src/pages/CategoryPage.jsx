import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import useFetch from "../hooks/useFetch";
import { useLoaderStore } from "../services/store/store";
import { useTheme } from "../services/providers/ThemeProvider";
const Category = () => {
  const { theme } = useTheme();
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoaderStore((store) => store);
  const { data, loading } = useFetch(`search/?query=${category} videos`);
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [loading]);
  return (
    <Container
      fluid
      style={theme ? { background: "#fff" } : { background: "#000" }}
    >
      <VideoList videos={data?.videos} title={category} />
    </Container>
  );
};

export default Category;
