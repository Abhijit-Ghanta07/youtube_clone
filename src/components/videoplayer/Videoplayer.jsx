import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./videoplayer.css";
function Videoplayer() {
  const { videoid } = useParams();
  let url = `https://www.youtube.com/watch?v=${videoid}`;
  return (
    <div className="videoplayer">
      <ReactPlayer url={url} controls={true} />
    </div>
  );
}

export default Videoplayer;
