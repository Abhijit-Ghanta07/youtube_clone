import { useDataStore } from "../services/store/store";
import { useQuery } from "@tanstack/react-query";
import { initalFetch } from "../services/queries/query";
import { useEffect } from "react";

const GetData = () => {
  const storeData = useDataStore((store) => store.setData);
  const { data, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: initalFetch,
  });

  useEffect(() => {
    if (data != undefined && data !== null && data?.videos.length > 0) {
      storeData(data.videos);
    }
  }, [data, isLoading]);
  return <></>;
};

export default GetData;
