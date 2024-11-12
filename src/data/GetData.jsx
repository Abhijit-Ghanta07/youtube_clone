import React, { useEffect } from "react";
import { useDataStore } from "../services/store/store";
import { useQuery } from "@tanstack/react-query";
import axiosInt from "../services/axios/axios";

const initalFetch = async () => {
  let { data } = await axiosInt.get("search/?query=trending videos");
  return data;
};

const GetData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: () => initalFetch(),
  });
  const storeData = useDataStore((store) => store.setData);

  useEffect(() => {
    if (data != undefined && data !== null && data?.videos.length > 0) {
      storeData(data.videos);
    }
  }, [data, isLoading]);
  return <></>;
};

export default GetData;
