import React from "react";
import { useFetchData } from "../api/Api";
import { useDataStore } from "../context/Context";

const GetData = () => {
  const { data, err, loading } = useFetchData("search/?q=cartoons");
  const storeData = useDataStore((store) => store.setData);
  if (data !== null) {
    storeData(data?.contents);
  }

  return <></>;
};

export default GetData;
