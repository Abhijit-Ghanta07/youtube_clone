import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useDataStore, useLoaderStore } from "../services/store/store";

const GetData = () => {
  const { data, err, loading } = useFetch("search/?query=indian%20songs");
  const storeData = useDataStore((store) => store.setData);
  const videos = useDataStore((store) => store.videoData);

  useEffect(() => {
    if (videos?.length > 0 && videos !== null) {
      return;
    } else if (data !== null && data !== undefined) {
      storeData(data?.videos);
    }
  }, [data]);
  return <></>;
};

export default GetData;
