import { create } from "zustand";

const useDataStore = create((set, get) => ({
  DATA: [],
  likedData: [],

  setData: (data) => {
    set((state) => ({ ...state, DATA: data }));
  },
  removeData: () => {
    set((state) => ({ ...state, DATA: [] }));
  },
}));

export default useDataStore;
