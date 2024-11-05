// components

import VersionComponent from '@/components/versionComponent';
import WelcomeComponent from '@/components/welcomeComponent';

function App() {
  return (
    <div className="text-center p-5">
      <WelcomeComponent />
      <VersionComponent />
    </div>
  );
}

export default App;
