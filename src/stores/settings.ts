import { create } from 'zustand';
import { Settings } from '@/types/settings';

// Create the Zustand store with the global settings for our app
const useSettingsStore = create<Settings>((set) => ({
  isMobile: window.innerWidth < 768,
  updateIsMobile: (isMobile: boolean) => set(() => ({ isMobile })),
}));

export default useSettingsStore;
