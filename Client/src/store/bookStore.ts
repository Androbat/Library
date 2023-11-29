
import { create } from "zustand";

interface Book {
  activeBook: string | undefined;
  setActiveBook: (data: string | undefined) => void;
}

export const useBookStore = create<Book>()((set) => ({
    activeBook: "",
    setActiveBook: (data) => set((state) => ({...state, activeBook: data})),

}));
