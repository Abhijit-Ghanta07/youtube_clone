import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./videoplayer.css";
function Videoplayer() {
  const { id } = useParams();
  let url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="videoplayer">
      <ReactPlayer url={url} controls={true} playing={true} muted={true} />
    </div>
  );
}

export default Videoplayer;
