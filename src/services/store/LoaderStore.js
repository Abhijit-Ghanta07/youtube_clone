import { create } from "zustand";

const useLoader = create((set, get) => ({
  status: false,

  startLoading: () => set({ status: true }),
  stopLoading: () => set({ status: false }),
}));

export default useLoader;
