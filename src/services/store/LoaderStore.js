import { create } from "zustand";

const useLoader = create((set, get) => ({
  loaderStatus: false,

  startLoading: () => set({ loaderStatus: true }),
  stopLoading: () => set({ loaderStatus: false }),
}));

export default useLoader;
