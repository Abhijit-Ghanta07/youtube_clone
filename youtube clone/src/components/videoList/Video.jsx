import React from "react";
import { useNavigate } from "react-router-dom";
import "./videolist.css";
const Video = ({ video }) => {
  const navigate = useNavigate();
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
    function handleClick(id) {
      navigate(`/channel/details/${id}`);
    }
    function imgClick(params) {
      navigate(`/video/play/${videoId}`);
    }
    return (
      <div className="video">
        <img src={thumbnails[0]?.url} alt="thumb" onClick={imgClick} />
        <h2>{title}</h2>
        <div className="channel" onClick={() => handleClick(channelId)}>
          <img src={avatar[0]?.url} alt="author" />
          <p>{authorName}</p>
        </div>
        <pre>
          {views}views . {publishedTimeText}
        </pre>
      </div>
    );
  }
};

export default Video;
