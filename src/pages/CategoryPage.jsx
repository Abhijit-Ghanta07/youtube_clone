import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import { useLoaderStore } from "../services/store/store";
import { useTheme } from "../services/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import axiosInt from "../services/axios/axios";
const fetchCate = async (category) => {
  let { data } = await axiosInt.get(`search/?query=${category} videos`);
  return data;
};
const Category = () => {
  const { theme } = useTheme();
  const { category } = useParams();
  const { startLoading, stopLoading } = useLoaderStore((store) => store);
  const { data, isPending } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchCate(category),
  });
  useEffect(() => {
    if (isPending) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [isPending]);
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
