import { Container, Row } from "react-bootstrap";
import VideoCard from "../videoCard/VideoCard";
import style from "./videolist.module.scss";
import Title from "../titleCard/Title";
const VideoList = ({ videos, title = "Featured" }) => {
  return (
    <Container fluid className="px-3">
      <Title name={`${title.toLocaleUpperCase()}`} />
      <Row className={style.videoCard__wrapper}>
        {videos &&
          videos?.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
      </Row>
    </Container>
  );
};

export default VideoList;
