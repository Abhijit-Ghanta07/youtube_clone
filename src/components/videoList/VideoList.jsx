import { useDataStore } from "../../context/Context";
import Video from "./Video";
import "./videolist.css";
const VideoList = () => {
  const storeData = useDataStore((store) => store.DATA);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        {storeData?.map((video, index) => (
          <Video video={video} key={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
