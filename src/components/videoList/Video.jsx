import { useNavigate } from "react-router-dom";
import "./videolist.css";
const Video = ({ video }) => {
  if (video.type === "video") {
    const {
      video: {
        thumbnails,
        title,
        videoId,
        lengthSeconds,
        publishedTimeText,
        stats: { views },
        author: { title: authorName, avatar, channelId, canonicalBaseUrl },
      },
    } = video;
    return (
      <div className="video">
        <Link to={`/video/play/${videoId}`}>
          <img src={thumbnails[0]?.url} alt="thumb" />
        </Link>
        <h2>{title}</h2>
        <Link className="channel" to={`/channel/details/${channelId}`}>
          <img src={avatar[0]?.url} alt="author" />
          <p>{authorName}</p>
        </Link>
        <pre>
          {views}views . {publishedTimeText}
        </pre>
      </div>
    );
  }
};

export default Video;
