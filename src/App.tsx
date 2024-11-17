import '@/configs/i18n';
import MainRoute from '@/configs/main-route';

function App() {
  console.log('Init App');
  return (
    <div data-testid="app-container" className="relative">
      <MainRoute />
    </div>
  );
}

export default App;
