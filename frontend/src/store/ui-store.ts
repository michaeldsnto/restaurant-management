import { create } from "zustand"

type ThemeMode = "dark" | "light"

type UiStore = {
  sidebarOpen: boolean
  theme: ThemeMode
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  setTheme: (theme: ThemeMode) => void
}

export const useUiStore = create<UiStore>((set) => ({
  sidebarOpen: true,
  theme: "dark",
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
  setTheme: (theme) => set({ theme }),
}))
