import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./videoplayer.css";
function Videoplayer() {
  const { videoid } = useParams();
  return (
    <div className="videoplayer">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoid}`}
        controls={true}
      />
    </div>
  );
}

export default Videoplayer;
