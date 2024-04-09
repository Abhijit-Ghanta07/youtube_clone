import React, { useEffect, useState } from "react";
import axiosInt from "../services/axios/axios.js";

const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInt.get(query, {
          signal: abortController.signal,
        });
        console.log(query);
        setData(data);
      } catch (err) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query]);
  return { data, loading, err };
};

export default useFetch;
