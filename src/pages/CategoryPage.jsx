import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { VideoList } from "../components/index";
import { useTheme } from "../services/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory } from "../services/queries/query";

const Category = () => {
  const { theme } = useTheme();
  const { category } = useParams();
  const { data } = useQuery({
    queryKey: ["category", category],
    queryFn: () => fetchCategory(category),
  });

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
