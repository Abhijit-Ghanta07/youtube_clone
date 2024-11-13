import axiosInt from "../axios/axios";

export const initalFetch = async () => {
  let { data } = await axiosInt.get("search/?query=trending videos");
  return data;
};

export const fetchCategory = async (category) => {
  let { data } = await axiosInt.get(`search/?query=${category} videos`);
  return data;
};

export const fetchChannel = async (id) => {
  let { data } = await axiosInt.get(`channel/details?channel_id=${id}`);
  return data;
};

export const fetchChannelVideos = async (id) => {
  let { data } = await axiosInt.get(`channel/videos?channel_id=${id}`);
  return data;
};

export const fetchSearch = async (q) => {
  let { data } = await axiosInt.get(`search/?query=${q}`);
  return data;
};
export const fetchVideoDetails = async (id) => {
  let { data } = await axiosInt.get(`video/details?video_id=${id}`);
  return data;
};

export const fetchRecomandations = async (id) => {
  let { data } = await axiosInt.get(`video/recommendations?video_id=${id}`);
  return data;
};
