import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <main className="relative grid min-h-svh place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      <div className="absolute z-0 top-0 left-0">
        <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-450px] left-[-450px] inline-block rounded-full w-[900px] h-[900px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-550px] left-[-550px] inline-block rounded-full w-[1100px] h-[1100px] border-solid border-2 border-muted-foreground" />
      </div>

      <div className="absolute z-0 bottom-0 right-0">
        <span className="absolute opacity-10 top-[-50px] left-[-50px] inline-block rounded-full w-[100px] h-[100px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-150px] left-[-150px] inline-block rounded-full w-[300px] h-[300px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-250px] left-[-250px] inline-block rounded-full w-[500px] h-[500px] border-solid border-2 border-muted-foreground" />
        <span className="absolute opacity-10 top-[-350px] left-[-350px] inline-block rounded-full w-[700px] h-[700px] border-solid border-2 border-muted-foreground" />
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
