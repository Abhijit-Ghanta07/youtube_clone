import { create } from "zustand";

const useDataStore = create((set, get) => ({
  DATA: [],
  loading: false,
  err: false,

  getData: (data) => {
    set({ DATA: data });
  },
}));

export default useDataStore;
