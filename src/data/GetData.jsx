import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useDataStore } from "../services/store/store";

const GetData = () => {
  const { data } = useFetch("search/?query=trending videos");
  const storeData = useDataStore((store) => store.setData);
  const videos = useDataStore((store) => store.videoData);

  useEffect(() => {
    if (data !== null && data !== undefined && data?.videos.length > 0) {
      storeData(data?.videos);
    }
  }, [data]);
  return <></>;
};

export default GetData;
