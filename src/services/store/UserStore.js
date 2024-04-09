import { create } from "zustand";
import FetchData from "../api/api.js";

const useUserStore = create((set) => ({
  data: [],
}));

export default useUserStore;
