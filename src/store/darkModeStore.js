// store/useDarkModeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDarkModeStore = create(
  persist(
    (set) => ({
      theme: "dark", // default
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
      setTheme: (newTheme) => set(() => ({ theme: newTheme })),
    }),
    {
      name: "theme", // key di localStorage
    }
  )
);

export default useDarkModeStore;
