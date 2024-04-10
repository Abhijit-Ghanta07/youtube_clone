import { Link, useNavigate } from "react-router-dom";
import style from "./video.module.scss";
import { Card, CardBody, CardImg } from "react-bootstrap";
const VideoCard = ({ video }) => {
  const viewsInk = (k) => {
    const divid = k / 10000;

    return Math.ceil(divid);
  };
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
          to={`/channel/details/${video?.channel_id}`}
        >
          <p>{video?.author}</p>
        </Link>
        <pre className={style.videoCard__views}>
          {viewsInk(video?.number_of_views)}K views . {video?.published_time}
        </pre>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
