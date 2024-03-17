import React from "react";
import { useGetData } from "../api/Api";
import useDataStore from "../context/DataContext.js";

const GetData = () => {
  const { data } = useGetData("search/?q=cartoons");
  const storeData = useDataStore((store) => store.getData);
  if (data !== null) {
    storeData(data);
  }

  return <></>;
};

export default GetData;
