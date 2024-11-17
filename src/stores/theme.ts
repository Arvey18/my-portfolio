import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '@/types/theme';

// Create the Zustand store with the theme state and actions
const useThemeStore = create<Theme>()(
  persist(
    (set) => ({
      style: 'light',
      changeTheme: (style: string) => set({ style }),
    }),
    {
      name: 'theme',
    }
  )
);

export default useThemeStore;
