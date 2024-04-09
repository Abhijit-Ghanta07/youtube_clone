import axiosInt from "../axios/axios";

const fetchData = async (q = "", signal = "") => {
  console.log(q);
  try {
    const { data } = await axiosInt.get(q, { signal: signal });
    return data;
  } catch (err) {
    console.log(err);
    return new Error("something went wrong");
  }
};

export default fetchData;
