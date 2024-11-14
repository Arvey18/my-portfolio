const Version = () => {
  // Access environment variables for app version and app environment
  const appVersion = import.meta.env.VITE_VERSION;
  const appEnvironment = import.meta.env.VITE_ENVIRONMENT;

  console.log('Version Component');
  return (
    <div className="text-xs mt-5">{`Version ${appVersion} from ${appEnvironment}`}</div>
  );
};

export default Version;
