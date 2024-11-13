import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import { useLoaderStore } from "../services/store/store";
import { useTheme } from "../services/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../services/queries/query";

const Category = () => {
  const { theme } = useTheme();
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoaderStore((store) => store);
  const { data, isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchCategory(category),
  });
  useEffect(() => {
    if (isLoading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isLoading]);
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
