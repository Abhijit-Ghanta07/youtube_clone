import { Col, Container, Row } from "react-bootstrap";
import { Sidebar, Header } from "../includes/index";
import { Link, useParams, ScrollRestoration } from "react-router-dom";
import { VideoList } from "../components/index";
import { countViews } from "../utils/countViews";
import { Player } from "../layouts/index";
import cl from "classnames";
import { useTheme } from "../services/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";
import {
  fetchRecomandations,
  fetchVideoDetails,
} from "../services/queries/query";
// style
import style from "./video.module.scss";

const VideoPage = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const { isSuccess, data: video } = useQuery({
    queryKey: ["videoDetails", id],
    queryFn: () => fetchVideoDetails(id),
  });
  const { data } = useQuery({
    queryKey: ["recomdation", { id }],
    queryFn: () => fetchRecomandations(id),
    enabled: isSuccess,
  });
  return (
    <>
      <ScrollRestoration />
      <Sidebar />
      <Container
        fluid
        className={cl(
          theme ? style.video__wrapper : style.video__wrapper__dark
        )}
      >
        <Header />
        <Row className="p-3">
          <Col xs={12} md={8}>
            <Player videoId={id} />
            <p className={style.video__title}>{video?.title}</p>
            <Link
              to={`/channel/${video?.channel_id}`}
              className={style.video__author}
            >
              {video?.author}
            </Link>
            <div className={style.video__views}>
              <span>{countViews(video?.number_of_views)} views .</span>
              <span>{video?.published_time}</span>
            </div>
          </Col>
          <Col xs={12} md={4} className={style.list__wrapper}>
            <VideoList
              videos={data?.videos}
              direction="vertical"
              title="Recomended Videos"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoPage;
