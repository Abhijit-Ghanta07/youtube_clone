import { Container, Row, Stack } from "react-bootstrap";
import VideoCard from "../videoCard/VideoCard";
import style from "./videolist.module.scss";
import Title from "../titleCard/Title";
const VideoList = ({
  videos,
  title = "Featured Videos",
  direction = "horizontal",
}) => {
  return (
    <Container fluid className="px-3">
      <Title name={`${title.toLocaleUpperCase()}`} />
      <Row>
        <Stack direction={direction} className={style.videoCard__wrapper}>
          {videos ? (
            videos?.map((video, index) => (
              <VideoCard video={video} key={index} />
            ))
          ) : (
            <p>Sorry no videos found</p>
          )}
        </Stack>
      </Row>
    </Container>
  );
};

export default VideoList;
