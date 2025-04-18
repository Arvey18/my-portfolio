/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import '@/configs/i18n';
import MainRoute from '@/configs/main-route';
import useLocalStorage from '@/hooks/useLocalStorage';
import useSettingsStore from '@/stores/settings';
import { Theme } from '@/types/theme';

type ThemeDefaultValue = {
  state: Theme;
};

function App() {
  console.log('Init App');

  const [themeValue] = useLocalStorage<ThemeDefaultValue>('theme', {
    state: { style: 'light', changeTheme: () => {} },
  });
  const updateIsMobile = useSettingsStore((state) => state.updateIsMobile);

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(
      themeValue ? themeValue.state.style : 'light'
    );
    console.log('initial theme');
  }, [themeValue]);

  const onWindowResize = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    updateIsMobile(isMobile);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <div data-testid="app-container" className="relative">
      <MainRoute />
    </div>
  );
}

export default App;
