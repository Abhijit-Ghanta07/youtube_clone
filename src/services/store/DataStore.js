import { create } from "zustand";
import fetchData from "../api/api.js";
const useDataStore = create((set, get) => ({
  videoData: [],

  setData: (data) => {
    set({ videoData: data });
  },
  setAsyncData: async (q) => {
    try {
      const data = await fetchData(`/search/?query=${q}`);
      set({ videoData: data?.videos });
    } catch (err) {
      console.log(err);
    }
  },
  removeData: () => {
    set({ videoData: [] });
  },
}));

export default useDataStore;
