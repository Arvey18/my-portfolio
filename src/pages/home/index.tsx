// components
import Welcome from '@/components/welcome';
import Version from '@/components/version';

const Home = () => {
  return (
    <div className="text-center">
      <Welcome />
      <Version />
    </div>
  );
};

export default Home;
