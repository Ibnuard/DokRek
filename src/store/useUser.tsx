import { create } from "zustand";
import { TUserStore } from "../global";

const useUserStore = create<TUserStore>((set) => ({
  user: {},
  saveUser: (userData) => set(() => ({ user: userData })),
  removeUser: () => set(() => ({ user: {} })),
}));

export default useUserStore;
