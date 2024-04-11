import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
  Spinner,
  Stack,
} from "react-bootstrap";
import { Sidebar, Header } from "../includes/index";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Loading, Title, VideoList } from "../components/index";
import { useLoaderStore } from "../services/store/store";
import { countViews } from "../utils/countViews";
import { Player } from "../layouts/index";
import fetchData from "../services/api/api";
// style
import style from "./video.module.scss";
const VideoPage = () => {
  const { id } = useParams();
  const { status, startLoading, stopLoading } = useLoaderStore(
    (store) => store
  );
  const { data: video, loading } = useFetch(`video/details?video_id=${id}`);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  }, [loading]);

  useEffect(() => {
    const abort = new AbortController();
    if (video) {
      setTimeout(() => {
        fetchData(`video/recommendations?video_id=${id}`, abort.signal)
          .then((res) => {
            setVideos(res?.videos);
          })
          .catch((err) => console.log(err));
      }, 2500);
    }
    return () => {
      abort.abort();
    };
  }, [id, video]);
  return (
    <>
      <Sidebar />
      <Container fluid className={style.video__wrapper}>
        <Header />
        <Row>
          <Col xs={12} md={8}>
            <Player videoId={id} />
            <p className={style.video__title}>{video?.title}</p>
            <Link
              to={`/channel/${video?.video_id}`}
              className={style.video__author}
            >
              {video?.author}
            </Link>
            <div className={style.video__views}>
              <span>{countViews(video?.number_of_views)}K views .</span>
              <span>{video?.published_time}</span>
            </div>
          </Col>
          <Col xs={12} md={4} className={style.list__wrapper}>
            <VideoList
              videos={videos}
              direction="vertical"
              title="Recomended Videos"
            />
          </Col>
        </Row>
      </Container>
      <Loading status={status} />
    </>
  );
};

// function Recomended({ data }) {
//   return (
//     <Container fluid className={style.recom__con}>
//       <Row>
//         <Col>
//           <Title name={"Recomended Videos"} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Stack direction="vertical" gap={2}>
//             {data &&
//               data?.videos?.map((video, index) => {
//                 return (
//                   <Card key={index} className="p-0 bg-dark text-light">
//                     <CardImg
//                       src={video?.thumbnails[0]?.url}
//                       alt="img"
//                       className="w-100"
//                     />
//                     <CardBody className="px-3 py-2">
//                       <p className={style.video__title}>{video?.title}</p>
//                       <Link
//                         to={`/channel/${video?.video_id}`}
//                         className={style.video__author}
//                       >
//                         {video?.author}
//                       </Link>
//                       <div className={style.video__views}>
//                         <span>
//                           {countViews(video?.number_of_views)}K views .
//                         </span>
//                         <span>{video?.published_time}</span>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 );
//               })}
//           </Stack>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

export default VideoPage;
