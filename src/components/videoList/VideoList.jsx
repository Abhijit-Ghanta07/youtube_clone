import { Container, Row } from "react-bootstrap";
import VideoCard from "../videoCard/VideoCard";
import style from "./videolist.module.scss";
import Title from "../titleCard/Title";
const VideoList = ({ Data, title = "Featured" }) => {
  return (
    <Container fluid className="p-0">
      <Title name={`${title} Videos`} />
      <Row className={style.videoCard__wrapper}>
        {Data &&
          Data?.map((video, index) => <VideoCard video={video} key={index} />)}
      </Row>
    </Container>
  );
};

export default VideoList;
