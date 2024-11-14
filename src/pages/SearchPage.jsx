import { useParams } from "react-router-dom";
import { VideoList } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import { Header, Sidebar } from "../includes/index";
import style from "./page.module.scss";
import { useTheme } from "../services/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../services/queries/query";

const SearchPage = () => {
  const { theme } = useTheme();
  const { query } = useParams();

  const { data } = useQuery({
    queryKey: ["fetchSearch", query],
    queryFn: () => fetchSearch(query),
  });

  return (
    <>
      <Sidebar />
      <Container
        fluid
        className={style.wrapper}
        style={theme ? { background: "#fff" } : { background: "#000" }}
      >
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
    </>
  );
};

export default SearchPage;
