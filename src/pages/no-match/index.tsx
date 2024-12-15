import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute left-0 top-0 z-0">
        <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-100px] top-[-100px] inline-block h-[200px] w-[200px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-150px] md:top-[-150px] md:h-[300px] md:w-[300px]" />
        <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-250px] md:top-[-250px] md:h-[500px] md:w-[500px]" />
        <span className="absolute left-[-200px] top-[-200px] inline-block h-[400px] w-[400px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:left-[-350px] md:top-[-350px] md:h-[700px] md:w-[700px]" />
        <span className="absolute left-[-450px] top-[-450px] hidden h-[900px] w-[900px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-550px] top-[-550px] hidden h-[1100px] w-[1100px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
      </div>

      <div className="absolute bottom-0 right-0 z-0">
        <span className="absolute left-[-50px] top-[-50px] inline-block h-[100px] w-[100px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-150px] top-[-150px] inline-block h-[300px] w-[300px] rounded-full border-2 border-solid border-muted-foreground opacity-10" />
        <span className="absolute left-[-250px] top-[-250px] hidden h-[500px] w-[500px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
        <span className="absolute left-[-350px] top-[-350px] hidden h-[700px] w-[700px] rounded-full border-2 border-solid border-muted-foreground opacity-10 md:min-[992px]:inline-block" />
      </div>

      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={() => navigate('/', { replace: true })}>
            Go back to Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NoMatch;
