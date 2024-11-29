import { create } from "zustand";

interface storeState {
  authToken: string | null;
  selectedRestorent: string | null;
  selectedMenuItems: { [key: string]: number };
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSelectedRestorent: (id: string) => void | null;
  setAuthToken: (token: string) => void;
  removeToken: () => void;
  setSelectedMenuItems: (id: string) => void;
  removeSelectedMenuItem: (id: string) => void;
  emptySelectedItems: () => void;
}

export const useAppStore = create<storeState>((set) => ({
  authToken: null,
  selectedMenuItems: {},
  selectedRestorent: null,
  isSidebarOpen: false,
  toggleSidebar: () => {
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    }));
  },
  setSelectedRestorent: (restorent) => {
    set({ selectedRestorent: restorent });
  },
  setSelectedMenuItems: (id) => {
    set((state) => {
      const updatedMenuItems = {
        ...state.selectedMenuItems,
        [id]: (state.selectedMenuItems[id] || 0) + 1,
      };
      console.log("Selected Menu Items Updated:", updatedMenuItems);
      return { selectedMenuItems: updatedMenuItems };
    });
  },

  removeSelectedMenuItem: (id) => {
    set((state) => {
      const newCount = (state.selectedMenuItems[id] || 0) - 1;
      const newSelectedItems = { ...state.selectedMenuItems };
      if (newCount <= 0) {
        delete newSelectedItems[id];
      } else {
        newSelectedItems[id] = newCount;
      }
      console.log("Selected Menu Items after removal:", newSelectedItems);
      return { selectedMenuItems: newSelectedItems };
    });
  },

  emptySelectedItems: () => {
    set({ selectedMenuItems: {} });
    console.log("Selected Menu Items emptied");
  },

  setAuthToken: (token) => {
    set({ authToken: token });
    console.log("Auth token set to:", token);
  },

  removeToken: () => {
    set({ authToken: null });
    console.log("Auth token removed");
  },
}));
