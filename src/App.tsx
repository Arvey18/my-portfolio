import { useEffect } from 'react';
import '@/configs/i18n';
import MainRoute from '@/configs/main-route';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Theme } from '@/types/theme';

type ThemeDefaultValue = {
  state: Theme;
};

function App() {
  console.log('Init App');

  const [themeValue] = useLocalStorage<ThemeDefaultValue>('theme', {
    state: { style: 'light', changeTheme: () => {} },
  });

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(
      themeValue ? themeValue.state.style : 'light'
    );
    console.log('initial theme');
  }, [themeValue]);

  return (
    <div data-testid="app-container" className="relative">
      <MainRoute />
    </div>
  );
}

export default App;
