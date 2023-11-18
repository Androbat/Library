import { create } from "zustand";

interface Auth {
    user: {
        uid: string | null,
        displayName: string | null,
        accessToken?: string | null,
    },
    setUser: (data: Partial<Auth["user"]>) => void,
}

export const userStore = create<Auth>()((set) => ({
    user: JSON.parse(localStorage.getItem("loggedUser") || "null") || null,
    setUser:  (data) =>
    set((state) => {
      const loggedUser = {
        ...state.user,
        ...data,
      };
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      return { user: loggedUser };
    }),
}))