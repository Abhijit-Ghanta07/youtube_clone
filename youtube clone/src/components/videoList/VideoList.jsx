import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../context/zustand";
import Video from "./Video";
import "./videolist.css";
const VideoList = () => {
  let query = "search/?q=random videos";
  const { Data, getData, loading } = useStore();
  const [apiData, setApiData] = useState({});
  const memoGetData = useMemo(() => {
    if (Data.length === 0) {
      getData(query);
    }
  }, [query]);
  useEffect(() => {
    setApiData(Data?.data);
  }, [Data]);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        {apiData?.contents?.map((video, index) => (
          <Video video={video} key={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
