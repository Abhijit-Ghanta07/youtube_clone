import { Link } from "react-router-dom";
import { Card, CardBody, CardImg } from "react-bootstrap";
import { countViews } from "../../utils/countViews";
// style
import style from "./video.module.scss";
const VideoCard = ({ video }) => {
  return (
    <Card className={style.videoCard}>
      <Link
        to={`/video/${video?.video_id}`}
        className="position-relative overflow-hidden"
      >
        <img
          src={video?.thumbnails[0]?.url}
          className={style.videoCard__img}
          alt="thumb"
        />
        <p className={style.videoCard__length}>{video?.video_length}</p>
      </Link>

      <CardBody>
        <h2 className={style.videoCard__title}>{video?.title}</h2>
        <Link
          className={style.videoCard__channel}
          to={`/channel/${video?.channel_id}`}
        >
          <p>{video?.author}</p>
        </Link>
        <p className={style.videoCard__views}>
          <span>{countViews(video?.number_of_views)}K views .</span>
          <span>{video?.published_time}</span>
        </p>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
