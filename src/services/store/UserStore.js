import { create } from "zustand";
import FetchData from "../api/Api";

const useUserStore = create((set) => ({
  Data: [],
  userInfo: [],
  videoId: "",
  channelDetails: [],
  channelVideos: [],
  channelPlaylist: [],
  userImage: undefined,
  loading: false,
  prevSearch: "",
  DeleteUser: () => set((state) => ({ ...state, userInfo: "" })),
  getUserFromLocal: () => {
    if ("username" in localStorage && "password" in localStorage) {
      const user = {
        name: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      };
      return set({ userInfo: user });
    }
  },
  getUserInfo: (value) => {
    localStorage.setItem("username", value?.name);
    localStorage.setItem("password", value?.password);
    set({ userInfo: value });
  },
  getVideoId: (id) => set({ videoId: id }),
  getData: async (query) => {
    const data = await FetchData(query);
    set({ Data: data });
  },
  getChannel: async (query) => {
    const channelDetails = await FetchData(query);
    set({ channelDetails: channelDetails });
  },
  getChannelVideos: async (query) => {
    const channelVideos = await FetchData(query);
    set({ channelVideos: channelVideos });
  },
  getChannelPlaylist: async (query) => {
    const channelPlaylist = await FetchData(query);
    set({ channelPlaylist: channelPlaylist });
  },
}));

export default useUserStore;
