import { create } from "zustand";

interface SidebarState {
  expand: number | null;
  setExpand: (id: number | null) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  expand: null,
  setExpand: (id) => set({ expand: id }),
}));
