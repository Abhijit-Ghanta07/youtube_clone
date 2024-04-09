import ReactPlayer from "react-player";
import "./videoplayer.css";
function Player({ id }) {
  let url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="videoplayer">
      <ReactPlayer url={url} controls={true} playing={true} muted={true} />
    </div>
  );
}

export default Player;
